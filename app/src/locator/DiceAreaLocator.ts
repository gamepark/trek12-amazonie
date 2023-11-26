import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'

export class DiceAreaLocator extends LineLocator {
  coordinates = { x: 0, y: 0, z: 0}

  getCoordinates(_item: MaterialItem, { type }: ItemContext) {
    if (type === MaterialType.YellowDice) {
      return { x: 10,  y: -10, z: 0}
    }

    return { x: 14, y: -10, z: 0}
  }
}

export const diceAreaLocator = new DiceAreaLocator()
