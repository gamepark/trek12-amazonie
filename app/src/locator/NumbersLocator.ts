import { ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

export class NumbersLocator extends ListLocator {

  getCoordinates(_: Location, { rules: { players } }: MaterialContext) {
    switch (players.length) {
      case 1:
        return { x: -6, y: -3 }
      case 2:
      case 3:
        return { x: -21.5, y: -10 }
      default:
        return { x: 38, y: -10 }
    }
  }

  getGap(_: Location, { rules: { players } }: MaterialContext) {
    switch (players.length) {
      case 1:
        return { x: 7 }
      case 2:
      case 3:
        return { x: 11 }
      default:
        return { y: 10 }
    }
  }
}

export const numbersLocator = new NumbersLocator()
