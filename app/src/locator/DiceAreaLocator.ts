import { LineLocator } from '@gamepark/react-game/dist/locators/LineLocator'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { ItemContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'

export class DiceAreaLocator extends LineLocator {
  coordinates = { x: 0, y: 0, z: 0}

  getCoordinates(_item: MaterialItem, { type }: ItemContext) {
    if (type === MaterialType.YellowDice) {
      return { x: -2, y: -2, z: 0}
    }

    return { x: 2, y: -2, z: 0}
  }

  getRotations(item: MaterialItem, context: ItemContext) {
    return ['rotate3d(1, -1, 0, 15deg)', 'translateZ(1em)', ...super.getRotations(item, context)]
  }
}

export const diceAreaLocator = new DiceAreaLocator()
