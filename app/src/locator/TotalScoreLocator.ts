import { Locator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'

export class TotalScoreLocator extends Locator {
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)
  positionOnParent = { x: 88.8, y: 90.5 }
}

export const totalScoreLocator = new TotalScoreLocator()
