import { ListLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'

export class ObservationNumberLocator extends ListLocator {
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)

  getPositionOnParent(location: Location) {
    return {
      x: 9.4,
      y: 69.7 + (location.id * 6.35)
    }
  }
}

export const observationNumberLocator = new ObservationNumberLocator()
