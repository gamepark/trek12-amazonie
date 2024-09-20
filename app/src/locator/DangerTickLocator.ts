import { FlexLocator, LocationDescription } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'

export class DangerTickLocator extends FlexLocator {
  locationDescription = new LocationDescription({ width: 3, height: 2.3, borderRadius: 0.5 })
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)
  positionOnParent = { x: 70.1, y: 83.6 }
  gap = { x: 0.5035 }
  lineGap = { y: 0.456 }
  lineSize = 4
  maxLines = 2
}

export const dangerTickLocator = new DangerTickLocator()
