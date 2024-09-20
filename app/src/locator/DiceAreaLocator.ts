import { ItemContext, ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'

export class DiceAreaLocator extends ListLocator {

  getCoordinates(_: Location, { rules: { players } }: MaterialContext) {
    switch (players.length) {
      case 1:
        return { x: -0.2, y: 3 }
      case 2:
        return { x: 7, y: -10 }
      case 3:
        return { x: 10, y: -10 }
      default:
        return { x: 33, y: 17 }
    }
  }

  getItemCoordinates(item: MaterialItem, context: ItemContext) {
    const { x = 0, y } = super.getItemCoordinates(item, context)
    return { x: context.type === MaterialType.YellowDice ? x : x + 3, y }
  }
}

export const diceAreaLocator = new DiceAreaLocator()
