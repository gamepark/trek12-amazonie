import { CreateItem, CustomMove, isCreateItemType, isCustomMoveType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { CustomMoveType } from './CustomMoveType'
import { Memory } from './Memory'
import { applyOperator, operators } from '../material/Operator'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import range from 'lodash/range'

export class ChooseResultRule extends SimultaneousRule {

  getLegalMoves(playerId: number): MaterialMove<number, number, number>[] {
    if (!this.isTurnToPlay(playerId)) return []
    const operand = this.remind(Memory.Operand, playerId)
    if (operand) {
      const moves = range(27).map((_: any, index: number) => this
        .material(MaterialType.ExpeditionSpaceValue)
        .createItem({
          id: applyOperator(operand, this.dicesValues),
          location: {
            id: index,
            type: LocationType.ExpeditionSpace,
            player: playerId,
          },
        }),
      )

      return moves
    }

    return operators.map((operator) => this.rules().customMove(CustomMoveType.ChooseOperand, { operator, player: playerId }))
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isCreateItemType(MaterialType.ExpeditionSpaceValue)(move)) return []

    const moves: MaterialMove[] = this.revealObservationCard(move)
    // TODO: sentier & zone & add indicator ring
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

  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    return []
  }

  onCustomMove(move: CustomMove) {
    if (isCustomMoveType(CustomMoveType.ChooseOperand)(move)) {
      this.memorize(Memory.Operand, move.data.operator, move.data.player)
      return this.addCross()
    }

    return []
  }

  addCross() {

    return []
  }

  get dicesValues() {
    return [
      this.material(MaterialType.YellowDice).getItem()!.id,
      this.material(MaterialType.GreenDice).getItem()!.id,
    ]
  }

}
