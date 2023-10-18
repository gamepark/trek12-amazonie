import { MaterialRulesPartCreator } from '@gamepark/rules-api'
import { RuleId } from '../rules/RuleId'
import { ChooseResultRule } from '../rules/ChooseResultRule'
import { RollDiceRule } from '../rules/RollDiceRule'
import { DiscoverRule } from '../rules/DiscoverRule'

export const rules: Record<RuleId, MaterialRulesPartCreator> = {
  [RuleId.RollDice]: RollDiceRule,
  [RuleId.ChooseResult]: ChooseResultRule,
  [RuleId.Discover]: DiscoverRule
}