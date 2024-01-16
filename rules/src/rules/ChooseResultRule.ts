import { CustomMove, isCreateItemType, isCustomMoveType, isEndPlayerTurn, ItemMove, MaterialMove, RuleMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { CustomMoveType } from './CustomMoveType'
import { ChooseOperandRule } from './delegates/ChooseOperandRule'
import { PlaceResultRule } from './delegates/PlaceResultRule'
import { AreaScore } from './helper/AreaScore'
import { PathwayScore } from './helper/PathwayScore'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class ChooseResultRule extends SimultaneousRule {


  get allCrossPlaced() {
    return this.game.players.every((p) => this.material(MaterialType.Cross).player(p).length === 20)
  }

  getLegalMoves(playerId: number): MaterialMove<number, number, number>[] {
    if (!this.isTurnToPlay(playerId)) return []
    const operand = this.remind(Memory.Operand, playerId)
    if (operand || this.remind(Memory.PlacedNode, playerId) !== undefined) {
      return new PlaceResultRule(this.game, playerId).getLegalMoves()
    }

    return new ChooseOperandRule(this.game, playerId).getLegalMoves()
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isCreateItemType(MaterialType.ExpeditionNodeValue)(move) && !isCreateItemType(MaterialType.Path)(move) && !isCreateItemType(MaterialType.AreaNode)(move)) return []
    return new PlaceResultRule(this.game, move.item.location.player!).afterItemMove(move)
  }

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.ChooseOperand)(move)) return []
    return new ChooseOperandRule(this.game, move.data.player).onCustomMove(move)
  }

  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    if (this.allCrossPlaced) {
      return [this.rules().startRule(RuleId.EndOfGameRule)]
    }
    return [this.rules().startRule(RuleId.Discover)]
  }

  onRuleEnd(move: RuleMove) {
    if (!isEndPlayerTurn(move)) return []
    const player = move.player
    const pathwayScore = new PathwayScore(this.game, player)
    const moves: MaterialMove[] = [
      this.material(MaterialType.PathwayScore)
        .player(player)
        .deleteItemsAtOnce(),
      this.material(MaterialType.PathwayScore)
        .player(player)
        .createItemsAtOnce(pathwayScore.scores.map((score) => ({
          id: score,
          location: {
            type: LocationType.PathwayScore,
            player
          }
        })))
    ]

    const areaScore = new AreaScore(this.game, player)
    moves.push(
      this.material(MaterialType.AreaScore)
        .player(player)
        .deleteItemsAtOnce(),
      this.material(MaterialType.AreaScore)
        .player(player)
        .createItemsAtOnce(areaScore.scores.map((score) => ({
          id: score,
          location: {
            type: LocationType.AreaScore,
            player
          }
        })))
    )
    return moves
  }

}
