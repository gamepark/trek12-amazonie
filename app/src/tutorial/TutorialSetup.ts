import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { RuleId } from '@gamepark/trek12-amazonie/rules/RuleId'
import { Trek12AmazonieOptions } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { Trek12AmazonieSetup } from '@gamepark/trek12-amazonie/Trek12AmazonieSetup'
export class TutorialSetup extends Trek12AmazonieSetup {

  setupDice() {
    this.material(MaterialType.GreenDice).createItem(({ id: 1, location: { type: LocationType.DiceArea, rotation: 3 } }))
    this.material(MaterialType.YellowDice).createItem(({ id: 2, location: { type: LocationType.DiceArea, rotation: 1 } }))
  }

  start(_options: Trek12AmazonieOptions) {
    this.startSimultaneousRule(RuleId.ChooseResult)
  }
}
