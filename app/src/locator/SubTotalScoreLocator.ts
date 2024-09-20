import { ListLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'
import { SubTotalId } from '../material/SubTotalDescription'

export class SubTotalScoreLocator extends ListLocator {

  parentItemType = MaterialType.ExplorationMap

  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)

  getPositionOnParent(location: Location) {
    switch (location.id) {
      case SubTotalId.Observations:
        return { x: 33.8, y: 91.9 }
      case SubTotalId.Pathways:
        return { x: 47.1, y: 91.9 }
      case SubTotalId.Areas:
        return { x: 59.5, y: 91.9 }
      case SubTotalId.Danger:
      default:
        return { x: 74.1, y: 91.9 }
    }
  }
}

export const subTotalScoreLocator = new SubTotalScoreLocator()
