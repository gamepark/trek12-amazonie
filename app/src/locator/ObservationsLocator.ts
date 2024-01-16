import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'

export class ObservationsLocator extends LineLocator {

  getCoordinates(_item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Coordinates {
    return getCardsCoordinates(context.rules.game.players.length)
  }

  getDelta(_item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Partial<Coordinates> {
    return getDeltaCoordinates(context.rules.game.players.length)
  }
}

export const observationsLocator = new ObservationsLocator()

function getCardsCoordinates(players: number): Coordinates {
  switch (players) {
    case 1:
      return { x: -6, y: -10, z: 0 }
    case 2:
    case 3:
      return { x: -26.5, y: -10, z: 0 }
    case 4:
    case 5:
    case 6:
    default:
      return { x: 33, y: -10, z: 0 }
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