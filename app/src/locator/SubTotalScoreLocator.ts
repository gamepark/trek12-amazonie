import { LineLocator } from '@gamepark/react-game'
import { Location, XYCoordinates } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { SubTotalId } from '../material/SubTotalDescription'

export class SubTotalScoreLocator extends LineLocator {

  parentItemType = MaterialType.ExplorationMap


  coordinates = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location) {
    const basePosition: XYCoordinates = { y: 91.9, x: 0 }
    switch (location.id) {
      case SubTotalId.Observations:
        basePosition.x = 33.8
        break
      case SubTotalId.Pathways:
        basePosition.x = 47.1
        break
      case SubTotalId.Areas:
        basePosition.x = 59.5
        break
      case SubTotalId.Danger:
        basePosition.x = 74.1
        break
    }

    return basePosition
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const subTotalScoreLocator = new SubTotalScoreLocator()
