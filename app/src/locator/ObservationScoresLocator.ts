import { ListLocator, LocationDescription } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'

export class ObservationScoresLocator extends ListLocator {
  locationDescription = new LocationDescription({ width: 0.7125, height: 0.7125 })
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)

  getPositionOnParent(location: Location) {
    return {
      x: 16.6,
      y: 69.8 + (location.id * 6.4)
    }
  }

  gap = { x: 0.7125 }
}

export const observationScoresLocator = new ObservationScoresLocator()
