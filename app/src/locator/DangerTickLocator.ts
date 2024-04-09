import { GridLocator } from '@gamepark/react-game'
import { Location, XYCoordinates } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'
import { DangerAreaDescription } from './description/DangerAreaDescription'

export class DangerTickLocator extends GridLocator {
  itemsGap = { x: 0.0265 * EXPEDITION_MAP_SIZE }
  linesGap = { y: 0.024 * EXPEDITION_MAP_SIZE }
  itemsPerLine = 4

  locationDescription = new DangerAreaDescription()

  parentItemType = MaterialType.ExplorationMap

  getPositionOnParent(location: Location): XYCoordinates {
    if (location.x! < 8) return { x: 70.1, y: 83.6 }
    return { x: 80.5, y: 78.9 }
  }

  getParentItem(location: Location) {
    return { type: MaterialType.ExplorationMap, location: { type: LocationType.ExplorationMap, player: location.player } }
  }
}

export const dangerTickLocator = new DangerTickLocator()
