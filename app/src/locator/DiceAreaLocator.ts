import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'

export class DiceAreaLocator extends LineLocator {

  getCoordinates(_item: MaterialItem, context: ItemContext<number, number, number>) {
    const hasMoreThanThreePlayers = context.rules.game.players.length > 3
    if (context.type === MaterialType.YellowDice) {
      return hasMoreThanThreePlayers ? { x: 33,  y: 17, z: 0} : { x: 10,  y: -10, z: 0} 
    }

    return hasMoreThanThreePlayers ? { x: 37,  y: 17, z: 0} : { x: 14, y: -10, z: 0}
  }
}

export const diceAreaLocator = new DiceAreaLocator()
