import { LineLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { Location } from '@gamepark/rules-api'

export class ObservationNumberLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationBoard

  coordinates = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location) {
    return {
      x: 11.9,
      y: 67.6 + (location.id * 6.4)
    }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const observationNumberLocator = new ObservationNumberLocator()