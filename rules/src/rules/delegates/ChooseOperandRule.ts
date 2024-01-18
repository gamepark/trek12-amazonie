import { CustomMove, isCreateItemType, isCustomMoveType, ItemMove, MaterialGame, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { Operator, operators } from '../../material/Operator'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { CustomMoveType } from '../CustomMoveType'
import { Memory } from '../Memory'


export class ChooseOperandRule extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  getLegalMoves(): MaterialMove<number, number, number>[] {
    return operators
      .filter((operator) => this.canChooseOperator(operator))
      .map((operator) => {
        const existingCross = this.material(MaterialType.Cross).player(this.player).locationId(operator).length

        return this.material(MaterialType.Cross)
          .createItem({
            location: {
              type: LocationType.OperatorChoice,
              id: operator,
              player: this.player,
              x: existingCross
            }
          })
      })
  }

  beforeItemMove(move: ItemMove) {
    if (!isCreateItemType(MaterialType.Cross)(move)) return []
    this.memorize(Memory.Operand, move.item.location.id, this.player)
    return []
  }

  canChooseOperator(operator: Operator) {
    return this
      .material(MaterialType.Cross)
      .locationId(operator)
      .location(LocationType.OperatorChoice)
      .player(this.player)
      .length < 4
  }
}
