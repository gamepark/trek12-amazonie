import { FlexLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'

export class PathwayScoreLocator extends FlexLocator {
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)
  positionOnParent = { x: 45, y: 67.9 }
  gap = { x: 0.043 * EXPEDITION_MAP_SIZE }
  lineGap = { y: 0.038 * EXPEDITION_MAP_SIZE }
  lineSize = 2
}

export const pathwayScoreLocator = new PathwayScoreLocator()
