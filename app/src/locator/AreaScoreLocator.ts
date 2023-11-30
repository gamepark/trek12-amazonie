
import { GridLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'

export class AreaScoreLocator extends GridLocator {
  itemsGap = { x: 0.043 * EXPEDITION_MAP_SIZE }
  linesGap = { y: 0.038 * EXPEDITION_MAP_SIZE }
  itemsPerLine = 2

  parentItemType = MaterialType.ExplorationMap


  coordinates = { x: 0, y: 0, z: 1 }
  positionOnParent =  { x: 57.3, y: 67.9 }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const areaScoreLocator = new AreaScoreLocator()
