import { MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { NumbersLocator } from './NumbersLocator'

export class ObservationsLocator extends NumbersLocator {

  getCoordinates(location: Location, context: MaterialContext) {
    const { x, y } = super.getCoordinates(location, context)
    if (context.rules.players.length === 1) {
      return { x, y: y - 7, z: 0.5 }
    } else {
      return { x: x - 4.5, y, z: 0.5 }
    }
  }
}

export const observationsLocator = new ObservationsLocator()
