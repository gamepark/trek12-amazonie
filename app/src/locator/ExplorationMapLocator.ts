import { getRelativePlayerIndex, ItemContext, ItemLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { explorationMapDescription } from '../material/ExplorationMapDescription'
import { ExplorationMapDescription } from './description/ExplorationMapDescription'

export class ExplorationMapLocator extends ItemLocator {
  locationDescription = new ExplorationMapDescription()

  getPosition(item: MaterialItem, context: ItemContext) {
    const players = context.rules.game.players
    const base = getBaseCoordinates(players.length)

    const index = getRelativePlayerIndex(context, item.location.player)

    let additionalX = ((explorationMapDescription.width + 0.9) * ((index) % 3))
    if (players.length === 2 && index === 1) additionalX += 5

    return {
      ...base,
      x: base.x + additionalX,
      y: base.y + (index < 3 ? 0 : 20)
    }
  }
}

export const expeditionBoardLocator = new ExplorationMapLocator()

function getBaseCoordinates(players: number): Coordinates {
  switch (players) {
    case 1:
      return { x: -20, y: -5, z: 0 }
    case 2:
      return { x: -20, y: 5, z: 0 }
    case 3:
      return { x: -20, y: 5, z: 0 }
    case 4:
    case 5:
    case 6:
    default:
      return { x: -20, y: -5, z: 0 }
  }
}