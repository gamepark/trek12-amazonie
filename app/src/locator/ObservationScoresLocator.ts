import { LineLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'

export class ObservationScoresLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationMap

  delta = { x: 0.038 * EXPEDITION_MAP_SIZE }

  coordinates = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location) {
    return {
      x: 16.6,
      y: 69.8 + (location.id * 6.4)
    }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const observationScoresLocator = new ObservationScoresLocator()
