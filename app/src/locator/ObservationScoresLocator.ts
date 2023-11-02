import { ItemContext, LineLocator, MaterialContext } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { Coordinates, Location, MaterialItem, XYCoordinates } from '@gamepark/rules-api'

export class ObservationScoresLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationMap

  delta = { x: 0.51 }

  coordinates = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location) {
    return {
      x: 16.6,
      y: 69.9 + (location.id * 6.4)
    }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const observationScoresLocator = new ObservationScoresLocator()