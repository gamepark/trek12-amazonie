import { ItemContext, ItemLocator, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { Coordinates } from '@gamepark/rules-api/dist/material/location/Location'
import { explorationMapDescription } from '../material/ExplorationMapDescription'

export class ExplorationMapLocator extends ItemLocator {
  position = { x: 0, y: 8, z: 0}

  getPosition(item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Coordinates {
    const base = { x: -23, y: 8, z: 0}

    return {
      ...base,
      x: base.x + ((explorationMapDescription.width + 1) * (item.id - 1))
    }
  }
}

export const expeditionBoardLocator = new ExplorationMapLocator()