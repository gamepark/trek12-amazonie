import { LineLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'
import { ObservationScoreDescription } from './description/ObservationScoreDescription'

export class ObservationScoresLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationMap

  delta = { x: 0.038 * EXPEDITION_MAP_SIZE }

  coordinates = { x: 0, y: 0, z: 1 }
  locationDescription = new ObservationScoreDescription()

  getPositionOnParent(location: Location) {
    return {
      x: 16.6,
      y: 69.8 + (location.id * 6.4)
    }
  }

  getParentItem(location: Location) {
    return { type: MaterialType.ExplorationMap, location: { type: LocationType.ExplorationMap, player: location.player } }
  }
}

export const observationScoresLocator = new ObservationScoresLocator()
