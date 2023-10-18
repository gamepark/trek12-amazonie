import { MaterialGameSetup } from '@gamepark/rules-api'
import { Trek12Rules } from './Trek12Rules'
import { PlayerId, Trek12Options } from './Trek12Options'
import { MaterialType } from './material/MaterialType'
import { LocationType } from './material/LocationType'
import { numberCards } from './material/NumberCard'
import shuffle from 'lodash/shuffle'
import { explorationCards } from './material/ExplorationCard'

export class Trek12Setup extends MaterialGameSetup<PlayerId, MaterialType, LocationType, Trek12Options> {
  Rules = Trek12Rules

  setupMaterial(_options: Trek12Options): void {
    this.setupNumberCards()
    this.setupObservationCards()
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
        },
      }))

    this.material(MaterialType.ObservationCard).createItems(observations)

  }

  start(_options: Trek12Options): void {
  }

}