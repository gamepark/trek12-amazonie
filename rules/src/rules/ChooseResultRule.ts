import { CustomMove, isCreateItemType, isCustomMoveType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { MaterialType } from '../material/MaterialType'
import { CustomMoveType } from './CustomMoveType'
import { ChooseOperandRule } from './delegates/ChooseOperandRule'
import { PlaceResultRule } from './delegates/PlaceResultRule'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class ChooseResultRule extends SimultaneousRule {

  getLegalMoves(playerId: number): MaterialMove<number, number, number>[] {
    if (!this.isTurnToPlay(playerId)) return []
    const operand = this.remind(Memory.Operand, playerId)
    if (operand) {
      return new PlaceResultRule(this.game, playerId).getLegalMoves()
    }


    return new ChooseOperandRule(this.game, playerId).getLegalMoves()
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isCreateItemType(MaterialType.ExpeditionNodeValue)(move)) return []
    return new PlaceResultRule(this.game, move.item.location.player!).afterItemMove(move)
  }

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.ChooseOperand)(move)) return []
    return new ChooseOperandRule(this.game, move.data.player).onCustomMove(move)
  }

  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    if (this.allCrossPlaced) {
      return [this.rules().endGame()]
    }
    return [this.rules().startRule(RuleId.RollDice)]
  }

  get allCrossPlaced() {
    return this.game.players.every((p) => this.material(MaterialType.Cross).player(p).length === 20)
  }

}
