import { CustomMove, isCreateItemType, isCustomMoveType, isEndPlayerTurn, ItemMove, MaterialMove, RuleMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerId } from '../Trek12AmazonieOptions'
import { CustomMoveType } from './CustomMoveType'
import { ChooseOperandRule } from './delegates/ChooseOperandRule'
import { PlaceResultRule } from './delegates/PlaceResultRule'
import { AreaScore } from './helper/AreaScore'
import { PathwayScore } from './helper/PathwayScore'
import { Memory } from './Memory'
import { RuleId } from './RuleId'
import { ScoringRule } from './ScoringRule'

export class ChooseResultRule extends SimultaneousRule {


  get allCrossPlaced() {
    return this.game.players.every((p) => this.hasAllCrossPlaced(p))
  }

  hasAllCrossPlaced(playerId: PlayerId) {
    return this.material(MaterialType.Cross).player(playerId).length === 20
  }

  getActivePlayerLegalMoves(playerId: number) {
    const operand = this.remind(Memory.Operand, playerId)
    if (operand || this.remind(Memory.PlacedNode, playerId) !== undefined) {
      return new PlaceResultRule(this.game, playerId).getLegalMoves()
    }

    return new ChooseOperandRule(this.game, playerId).getLegalMoves()
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    const moves: MaterialMove[] = []
    if (isCreateItemType(MaterialType.Cross)(move)) {
      moves.push(
        ...new ChooseOperandRule(this.game, move.item.location.player!).afterItemMove(move)
      )
    }


    if (isCreateItemType(MaterialType.ExpeditionNodeValue)(move) || isCreateItemType(MaterialType.Path)(move) || isCreateItemType(MaterialType.AreaNode)(move)) {
      moves.push(
        ...new PlaceResultRule(this.game, move.item.location.player!).afterItemMove(move)
      )
    }

    const endPlayerTurn = moves.find(isEndPlayerTurn)
    if (endPlayerTurn && this.hasAllCrossPlaced(endPlayerTurn.player)) {
      moves.push(
        ...new ScoringRule(this.game, endPlayerTurn.player).endOfPlayerTurnMoves
      )
    }

    return moves
  }

  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    if (this.allCrossPlaced) {
      return [this.rules().endGame()]
    }
    return [this.rules().startRule(RuleId.Discover)]
  }
}
