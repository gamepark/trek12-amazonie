import { LineLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'

export class TotalScoreLocator extends LineLocator {

  parentItemType = MaterialType.ExplorationMap


  coordinates = { x: 0, y: 0, z: 1 }

  positionOnParent = { y: 90.5, x: 88.8 }

  getParentItem(location: Location) {
    return { type: MaterialType.ExplorationMap, location: { type: LocationType.ExplorationMap, player: location.player } }
  }
}

export const totalScoreLocator = new TotalScoreLocator()
