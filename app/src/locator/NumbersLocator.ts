import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'

export class NumbersLocator extends LineLocator {

  getCoordinates(_item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Coordinates {
    return getCardsCoordinates(context.rules.game.players.length)
  }

  getDelta(_item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Partial<Coordinates> {
    return getDeltaCoordinates(context.rules.game.players.length)
  }
}

export const numbersLocator = new NumbersLocator()

function getCardsCoordinates(players: number): Coordinates {
  switch (players) {
    case 1:
      return { x: -6, y: -3, z: -1 }
    case 2:
    case 3:
      return { x: -21.5, y: -8, z: 0 }
    case 4:
    case 5:
    case 6:
    default:
      return { x: 37, y: -10, z: -1 }
  }
}

function getDeltaCoordinates(players: number): Coordinates {
  switch (players) {
    case 1:
      return { x: 7, y: 0, z: 0 }
    case 2:
    case 3:
      return { x: 11, y: 0, z: 0 }
    case 4:
    case 5:
    case 6:
    default:
      return { x: 0, y: 10, z: 0 }
  }
}
