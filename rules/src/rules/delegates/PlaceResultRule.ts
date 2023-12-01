import { CreateItem, isCreateItemType, ItemMove, MaterialGame, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import range from 'lodash/range'
import { ForestBasicFieldTypes } from '../../forests/Forest'
import { Field } from '../../material/Field'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { applyOperator, Operator, SpecialValue } from '../../material/Operator'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { Area } from '../helper/Area'
import { Node } from '../helper/Node'
import { Pathway } from '../helper/Pathway'
import { Memory } from '../Memory'
import { ChoosePathNodeRule } from './ChoosePathNodeRule'


export class PlaceResultRule extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  getLegalMoves(): MaterialMove<number, number, number>[] {
    if (this.remind(Memory.PlacedNode, this.player) !== undefined) {
      return new ChoosePathNodeRule(this.game, this.player).getLegalMoves()
    }
    const operand = this.remind(Memory.Operand, this.player)
    const result = applyOperator(operand, this.dicesValues)
    return range(27)
      .filter((index: number) => new Node(this.game, this.player, index).isWritable)
      .map((index: number) => this
        .material(MaterialType.ExpeditionNodeValue)
        .createItem({
          id: result > 12 ? SpecialValue.Spider : result,
          location: {
            id: index,
            type: LocationType.ExpeditionNode,
            player: this.player
          }
        })
      )
  }

  afterItemMove(move: ItemMove): MaterialMove<number, number, number>[] {
    if (this.remind(Memory.PlacedNode, this.player) !== undefined) {
      return new ChoosePathNodeRule(this.game, this.player).afterItemMove(move)
    }

    if (!isCreateItemType(MaterialType.ExpeditionNodeValue)(move)) return []

    const moves: MaterialMove[] = []
    moves.push(...this.addPiranha(move))
    moves.push(...new Area(this.game, this.player, move.item).addAreaNodeMoves)
    moves.push(...new Pathway(this.game, this.player, move.item).createPathwayMoves)
    moves.push(...this.moveRing(move))

    this.forget(Memory.Operand, move.item.location.player!)

    if (this.remind(Memory.PlacedNode, this.player)) return moves

    moves.push(this.rules().endPlayerTurn(move.item.location.player!))
    return moves
  }

  addPiranha(move: CreateItem) {
    const operand = this.remind(Memory.Operand, this.player)
    const fieldType = ForestBasicFieldTypes[move.item.location.id]
    if (operand !== Operator.MAX && fieldType === Field.Water) {
      return this.material(MaterialType.Piranha)
        .createItems([
          { location: { ...move.item.location } }
        ])
    }

    return []
  }

  moveRing(move: CreateItem) {
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

    if (!ring.length) return []
    const item = ring.getItem()!
    if (item.location.x! < 5) {
      return ring.moveItems({
        id: observation.location.x,
        type: LocationType.ObservationScores,
        x: item.location.x! + 1,
        player: move.item.location.player
      })
    }

    return []
  }

  get dicesValues() {
    return [
      this.material(MaterialType.YellowDice).getItem()!.location.rotation,
      this.material(MaterialType.GreenDice).getItem()!.location.rotation + 1
    ]
  }
}
