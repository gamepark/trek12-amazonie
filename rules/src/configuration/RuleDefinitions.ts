import { MaterialRulesPartCreator } from '@gamepark/rules-api'
import { ChooseResultRule } from '../rules/ChooseResultRule'
import { EndOfGameRule } from '../rules/EndOfGameRule'
import { RollDiceRule } from '../rules/RollDiceRule'
import { RuleId } from '../rules/RuleId'
import { DiscoverRule } from '../rules/DiscoverRule'

export const rules: Record<RuleId, MaterialRulesPartCreator> = {
  [RuleId.RollDice]: RollDiceRule,
  [RuleId.ChooseResult]: ChooseResultRule,
  [RuleId.EndOfGameRule]: EndOfGameRule,
  [RuleId.Discover]: DiscoverRule
}
