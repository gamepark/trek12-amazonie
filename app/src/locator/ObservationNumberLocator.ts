import { LineLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { Location } from '@gamepark/rules-api'

export class ObservationNumberLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationMap

  coordinates = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location) {
    return {
      x: 9.4,
      y: 69.8 + (location.id * 6.4)
    }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const observationNumberLocator = new ObservationNumberLocator()