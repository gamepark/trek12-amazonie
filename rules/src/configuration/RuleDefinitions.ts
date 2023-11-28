import { MaterialRulesPartCreator } from '@gamepark/rules-api'
import { ChooseResultRule } from '../rules/ChooseResultRule'
import { EndOfGameRule } from '../rules/EndOfGameRule'
import { RollDiceRule } from '../rules/RollDiceRule'
import { RuleId } from '../rules/RuleId'

export const rules: Record<RuleId, MaterialRulesPartCreator> = {
  [RuleId.RollDice]: RollDiceRule,
  [RuleId.ChooseResult]: ChooseResultRule,
  [RuleId.EndOfGameRule]: EndOfGameRule
}
