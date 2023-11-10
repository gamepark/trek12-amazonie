import { CreateItem, CustomMove, isCreateItemType, isCustomMoveType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { PlayerId } from '../Trek12Options'
import { CustomMoveType } from './CustomMoveType'
import { Memory } from './Memory'
import { applyOperator, Operator, operators, SpecialValue } from '../material/Operator'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import range from 'lodash/range'
import { RuleId } from './RuleId'

export class ChooseResultRule extends SimultaneousRule {

  getLegalMoves(playerId: number): MaterialMove<number, number, number>[] {
    if (!this.isTurnToPlay(playerId)) return []
    const operand = this.remind(Memory.Operand, playerId)
    if (operand) {
      const result = applyOperator(operand, this.dicesValues)
      return range(27)
        .filter((index: number) => this.isEmptySpace(index, playerId))
        .map((index: number) => this
        .material(MaterialType.ExpeditionSpaceValue)
        .createItem({
          id: result > 12? SpecialValue.Spider: result,
          location: {
            id: index,
            type: LocationType.ExpeditionSpace,
            player: playerId,
          },
        }),
      )
    }

    return this.getChooseOperatorMoves(playerId)
  }

  isEmptySpace(index: number, player: PlayerId) {
    return !this.material(MaterialType.ExpeditionSpaceValue)
      .location(LocationType.ExpeditionSpace)
      .locationId(index)
      .player(player)
      .length
  }

  getChooseOperatorMoves(playerId: PlayerId) {

    return operators
      .filter((operator) => this.canChooseOperator(operator, playerId))
      .map((operator) => this.rules().customMove(CustomMoveType.ChooseOperand, { operator, player: playerId }))
  }

  canChooseOperator(operator: Operator, player: PlayerId) {
    return this
      .material(MaterialType.Cross)
      .id(operator)
      .location(LocationType.OperatorChoice)
      .player(player)
      .length < 4
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isCreateItemType(MaterialType.ExpeditionSpaceValue)(move)) return []

    const moves: MaterialMove[] = this.revealObservationCard(move)
    // TODO: sentier & zone

    this.forget(Memory.Operand, move.item.location.player!)
    moves.push(this.rules().endPlayerTurn(move.item.location.player!))

    return moves
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

  onCustomMove(move: CustomMove) {
    if (isCustomMoveType(CustomMoveType.ChooseOperand)(move)) {
      this.memorize(Memory.Operand, move.data.operator, move.data.player)
      return this.addCross(move.data.operator, move.data.player)
    }

    return []
  }

  addCross(operator: Operator, player: PlayerId) {

    return [
      this.material(MaterialType.Cross)
        .createItem({
          location: {
            type: LocationType.OperatorChoice,
            id: operator,
            player
          }
        })
    ]
  }

  get dicesValues() {
    return [
      this.material(MaterialType.YellowDice).getItem()!.location.rotation,
      this.material(MaterialType.GreenDice).getItem()!.location.rotation,
    ]
  }

  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    return [this.rules().startRule(RuleId.RollDice)]
  }

}
