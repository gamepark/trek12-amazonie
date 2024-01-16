import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'

export class DiceAreaLocator extends LineLocator {

  getCoordinates(_item: MaterialItem, context: ItemContext<number, number, number>) {
    if (context.type === MaterialType.YellowDice) {
      return getYellowDiceCoordinates(context.rules.game.players.length)
    } else {
      return getGreenDiceCoordinates(context.rules.game.players.length)
    }
  }
}

export const diceAreaLocator = new DiceAreaLocator()

function getYellowDiceCoordinates(players: number): Coordinates {
  switch (players) {
    case 1:
      return { x: -0.2, y: 3, z: 0 }
    case 2:
    case 3:
      return { x: 10, y: -10, z: 0 }
    case 4:
    case 5:
    case 6:
    default:
      return { x: 33, y: 17, z: 0 }
  }
}

function getGreenDiceCoordinates(players: number): Coordinates {
  switch (players) {
    case 1:
      return { x: 2.8, y: 3, z: 0 }
    case 2:
    case 3:
      return { x: 14, y: -10, z: 0 }
    case 4:
    case 5:
    case 6:
    default:
      return { x: 37, y: 17, z: 0 }
  }
}