import { LineLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'

export class ObservationNumberLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationMap

  coordinates = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location) {
    return {
      x: 9.4,
      y: 69.7 + (location.id * 6.35)
    }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const observationNumberLocator = new ObservationNumberLocator()
