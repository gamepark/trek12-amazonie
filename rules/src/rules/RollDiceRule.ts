import { MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { RuleId } from './RuleId'

export class RollDiceRule extends MaterialRulesPart {

  onRuleStart(): MaterialMove[] {
    const moves: MaterialMove[] = []
    moves.push(this.material(MaterialType.GreenDice).rollItem({ type: LocationType.DiceArea }))
    moves.push(this.material(MaterialType.YellowDice).rollItem({ type: LocationType.DiceArea }))
    moves.push(this.rules().startSimultaneousRule(RuleId.ChooseResult))
    return moves
  }
}
