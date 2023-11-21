import range from 'lodash/range'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { applyOperator, SpecialValue } from '../../material/Operator'
import { PlayerId } from '../../Trek12Options'
import { CreateItem, isCreateItemType, ItemMove, MaterialGame, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { createPath, Node, mapGraph } from '../helper/Node'
import { Pathway } from '../helper/Pathway'
import { Memory } from '../Memory'
import equal from 'fast-deep-equal'


export class PlaceResultRule extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  getLegalMoves(): MaterialMove<number, number, number>[] {
    const operand = this.remind(Memory.Operand, this.player)
    const result = applyOperator(operand, this.dicesValues)
    return range(27)
      .filter((index: number) => new Node(this.game, this.player, index).isWritable)
      .map((index: number) => this
        .material(MaterialType.ExpeditionNodeValue)
        .createItem({
          id: result > 12? SpecialValue.Spider: result,
          location: {
            id: index,
            type: LocationType.ExpeditionNode,
            player: this.player,
          },
        }),
      )
  }

  afterItemMove(move: ItemMove): MaterialMove<number, number, number>[] {
    if (!isCreateItemType(MaterialType.ExpeditionNodeValue)(move)) return []

    const moves: MaterialMove[] = []
    moves.push(...this.createPathway(move))
    moves.push(...this.revealObservationCard(move))

    this.forget(Memory.Operand, move.item.location.player!)
    moves.push(this.rules().endPlayerTurn(move.item.location.player!))

    return moves
  }

  createPathway(move: CreateItem) {
    const adjacentNodes = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .filter((item) => {
        const node= new Node(this.game, this.player, item.location.id)
        return node.isAdjacentTo(move.item.location.id)
          && node.isValueNextTo(move.item.id)
          && !new Pathway(this.game, this.player, item).hasAlreadyValue(move.item.id)
      })
      .getItems()

    if (!adjacentNodes.length) return []


    const superiorNodes = adjacentNodes.filter((item) => item.id > move.item.id)
    const inferiorNodes = adjacentNodes.filter((item) => item.id < move.item.id)

    const moves: MaterialMove[] = []
    if (superiorNodes.length > 1) {
      console.warn("there is more than one superior node adjacent, player must choose")
    } else {
      moves.push(
        ...superiorNodes.map((item) => this.material(MaterialType.Path).createItem({
          location: {
            id: mapGraph.find((path) => equal(path, createPath(item.location.id, move.item.location.id)))!,
            type: LocationType.Path,
            player: this.player
          }
        }))
      )
    }

    if (inferiorNodes.length > 1) {
      console.warn("there is more than one inferior node adjacent, player must choose")
    } else {
      moves.push(
        ...inferiorNodes.map((item) => this.material(MaterialType.Path).createItem({
          location: {
            id: mapGraph.find((path) => equal(path, createPath(item.location.id, move.item.location.id)))!,
            type: LocationType.Path,
            player: this.player
          }
        }))
      )
    }

    return moves;
  }

  revealObservationCard(move: CreateItem) {
    const numberedCard = this.material(MaterialType.NumberCard).id(move.item.id + 1)
    if (!numberedCard.length) return []

    const card = numberedCard.getItem()!
    const observationCard = this
      .material(MaterialType.ObservationCard)
      .location((location) => location.x === card.location.x)

    const observation = observationCard.getItem()!
    const ring = this
      .material(MaterialType.ScoreRing)
      .location(LocationType.ObservationScores)
      .locationId(observation.location.x)
      .player(move.item.location.player)

    const moves: MaterialMove[] = []

    if (observation.location.rotation) {
      moves.push(observationCard.rotateItem(false))
    }

    if (!ring.length) {
      moves.push(
        this
          .material(MaterialType.ScoreRing)
          .createItem({
            location: {
              id: observation.location.x,
              type: LocationType.ObservationScores,
              x: 0,
              player: move.item.location.player
            },
          }),
      )
    } else {
      const item = ring.getItem()!
      if (item.location.x! < 5) {
        moves.push(ring.moveItem({
          id: observation.location.x,
          type: LocationType.ObservationScores,
          x: item.location.x! + 1,
          player: move.item.location.player
        }))
      }
    }
    return moves
  }

  get dicesValues() {
    return [
      this.material(MaterialType.YellowDice).getItem()!.location.rotation,
      this.material(MaterialType.GreenDice).getItem()!.location.rotation + 1,
    ]
  }
}
