
import range from 'lodash/range'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { applyOperator, Operator, operators, SpecialValue } from '../../material/Operator'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { CustomMove, isCustomMoveType, MaterialGame, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { CustomMoveType } from '../CustomMoveType'
import { Memory } from '../Memory'


export class ChooseOperandRule extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  getLegalMoves(): MaterialMove<number, number, number>[] {

      return operators
        .filter((operator) => this.canChooseOperator(operator))
        .map((operator) => this.rules().customMove(CustomMoveType.ChooseOperand, { operator, player: this.player }))
  }

  onCustomMove(move: CustomMove) {
    if (isCustomMoveType(CustomMoveType.ChooseOperand)(move)) {
      this.memorize(Memory.Operand, move.data.operator, this.player)
      return this.addCross(move.data.operator)
    }

    return []
  }

  addCross(operator: Operator) {

    return [
      this.material(MaterialType.Cross)
        .createItem({
          location: {
            type: LocationType.OperatorChoice,
            id: operator,
            player: this.player
          }
        })
    ]
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
