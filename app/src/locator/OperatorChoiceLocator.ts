import { ListLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'
import { OperatorChoiceDescription } from './description/OperatorChoiceDescription'

export class OperatorChoiceLocator extends ListLocator {
  locationDescription = new OperatorChoiceDescription()
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)

  getPositionOnParent(location: Location) {
    return {
      x: 77.95 + ((location.id - 1) * 0.05),
      y: 59.6 + ((location.id - 1) * 3.8)
    }
  }

  gap = { x: 0.741, y: -0.01 }
}

export const operatorChoiceLocator = new OperatorChoiceLocator()
