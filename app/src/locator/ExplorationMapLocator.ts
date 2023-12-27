import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { ExplorationMapDescription } from './description/ExplorationMapDescription'
import { explorationMapDescription } from '../material/ExplorationMapDescription'

export class ExplorationMapLocator extends ItemLocator {
  locationDescription = new ExplorationMapDescription()

  getPosition(item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Coordinates {
    const hasGameMoreThanThreePlayers = context.rules.game.players.length > 3
    const base = hasGameMoreThanThreePlayers ? { x: -20, y: -5, z: 0} : { x: -20, y: 5, z: 0}


    return {
      ...base,
      x: (base.x + ((explorationMapDescription.width + 0.9) * ((item.id-1) % 3))),
      y: base.y + (item.id < 4 ? 0 : 20)
    }
  }
}

export const expeditionBoardLocator = new ExplorationMapLocator()
