import { LineLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'

export class TotalScoreLocator extends LineLocator {

  parentItemType = MaterialType.ExplorationMap


  coordinates = { x: 0, y: 0, z: 1 }

  positionOnParent = { y: 90.5, x: 88.8 }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const totalScoreLocator = new TotalScoreLocator()
