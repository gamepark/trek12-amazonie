import { LineLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { Location } from '@gamepark/rules-api'

export class ObservationNumberLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationMap

  coordinates = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location) {
    return {
      x: 9.4,
      y: 69.3 + (location.id * 6.35)
    }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const observationNumberLocator = new ObservationNumberLocator()
