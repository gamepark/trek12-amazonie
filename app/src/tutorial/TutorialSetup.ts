import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { NumberCard } from '@gamepark/trek12-amazonie/material/NumberCard'
import { RuleId } from '@gamepark/trek12-amazonie/rules/RuleId'
import { Trek12AmazonieOptions } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { Trek12AmazonieSetup } from '@gamepark/trek12-amazonie/Trek12AmazonieSetup'
export class TutorialSetup extends Trek12AmazonieSetup {

  setupDice() {
    this.material(MaterialType.GreenDice).createItem(({ id: 1, location: { type: LocationType.DiceArea, rotation: 3 } }))
    this.material(MaterialType.YellowDice).createItem(({ id: 2, location: { type: LocationType.DiceArea, rotation: 1 } }))
  }

  setupNumberCards() {
    this.material(MaterialType.NumberCard).createItem({
      id: NumberCard.Four,
      location: {
        type: LocationType.Numbers
      }
    })
    this.material(MaterialType.NumberCard).createItem({
      id: NumberCard.Six,
      location: {
        type: LocationType.Numbers
      }
    })
    this.material(MaterialType.NumberCard).createItem({
      id: NumberCard.Three,
      location: {
        type: LocationType.Numbers
      }
    })
  }

  start(_options: Trek12AmazonieOptions) {
    this.startSimultaneousRule(RuleId.ChooseResult)
  }
}
