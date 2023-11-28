import { GridLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'

export class DangerTickLocator extends GridLocator {
  itemsGap = { x: 0.0265 * EXPEDITION_MAP_SIZE }
  linesGap = { y: 0.024 * EXPEDITION_MAP_SIZE }
  itemsPerLine = 4

  parentItemType = MaterialType.ExplorationMap


  coordinates = { x: 0, y: 0, z: 1 }
  positionOnParent = { x: 70.1, y: 83.6 }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const dangerTickLocator = new DangerTickLocator()
