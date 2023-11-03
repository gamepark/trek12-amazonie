import { MaterialGameSetup } from '@gamepark/rules-api'
import { Trek12Rules } from './Trek12Rules'
import { PlayerId, Trek12Options } from './Trek12Options'
import { MaterialType } from './material/MaterialType'
import { LocationType } from './material/LocationType'
import { numberCards } from './material/NumberCard'
import shuffle from 'lodash/shuffle'
import { explorationCards } from './material/ExplorationCard'
import { d6, d6Minus1 } from './material/Dice'
import sample from 'lodash/sample'
import { RuleId } from './rules/RuleId'

export class Trek12Setup extends MaterialGameSetup<PlayerId, MaterialType, LocationType, Trek12Options> {
  Rules = Trek12Rules

  setupMaterial(_options: Trek12Options): void {
    this.setupNumberCards()
    this.setupObservationCards()
    this.setupDice()
  }

  setupNumberCards = () => {
    const numbers =  shuffle(numberCards)
      .slice(0, 3)
      .map((id) => ({
        id,
        location: {
          type: LocationType.Numbers,
        },
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
        },
      }))

    this.material(MaterialType.ObservationCard).createItems(observations)

  }

  setupDice() {
    this.material(MaterialType.GreenDice).createItem(({ id: sample(d6), location: { type: LocationType.DiceArea }}))
    this.material(MaterialType.YellowDice).createItem(({ id: sample(d6Minus1), location: { type: LocationType.DiceArea }}))
  }

  start(_options: Trek12Options): void {
    this.startSimultaneousRule(RuleId.ChooseResult)
  }

}
