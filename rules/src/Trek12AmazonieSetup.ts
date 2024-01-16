import { MaterialGameSetup } from '@gamepark/rules-api'
import shuffle from 'lodash/shuffle'
import { explorationCards } from './material/ExplorationCard'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { numberCards } from './material/NumberCard'
import { RuleId } from './rules/RuleId'
import { PlayerId, Trek12AmazonieOptions } from './Trek12AmazonieOptions'
import { Trek12AmazonieRules } from './Trek12AmazonieRules'

export class Trek12AmazonieSetup extends MaterialGameSetup<PlayerId, MaterialType, LocationType, Trek12AmazonieOptions> {
  Rules = Trek12AmazonieRules

  setupMaterial(_options: Trek12AmazonieOptions): void {
    this.setupNumberCards()
    this.setupObservationCards()
    this.setupDice()
  }

  setupNumberCards = () => {
    const numbers = shuffle(numberCards)
      .slice(0, 3)
      .map((id) => ({
        id,
        location: {
          type: LocationType.Numbers
        }
      }))

    this.material(MaterialType.NumberCard).createItems(numbers)

  }

  setupObservationCards() {
    const observations = shuffle(explorationCards)
      .slice(0, 3)
      .map((id) => ({
        id,
        location: {
          type: LocationType.Observations,
          rotation: true
        }
      }))

    this.material(MaterialType.ObservationCard).createItems(observations)

  }

  setupDice() {
    this.material(MaterialType.GreenDice).createItem(({ id: 1, location: { type: LocationType.DiceArea } }))
    this.material(MaterialType.YellowDice).createItem(({ id: 2, location: { type: LocationType.DiceArea } }))
  }

  start(_options: Trek12AmazonieOptions): void {
    this.startRule(RuleId.RollDice)
  }

}
