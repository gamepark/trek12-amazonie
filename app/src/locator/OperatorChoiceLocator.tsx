import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'
import { OperatorChoiceDescription } from './description/OperatorChoiceDescription'

export class OperatorChoiceLocator extends LineLocator {
  parentItemType = MaterialType.ExplorationMap

  locationDescription = new OperatorChoiceDescription()
  delta = { x: 0.041 * EXPEDITION_MAP_SIZE, y: -0.01 }
  coordinates = { x: 0, y: 0, z: 1 }

  getDelta(_item: MaterialItem<number, number>, _context: ItemContext<number, number, number>): Partial<Coordinates> {
    return super.getDelta(_item, _context)
  }

  getPositionOnParent(location: Location) {
    return {
      x: 78.0 + ((location.id - 1) * 0.05),
      y: 59.6 + ((location.id - 1) * 3.8)
    }
  }

  getParentItem(location: Location) {
    return { type: MaterialType.ExplorationMap, location: { type: LocationType.ExplorationMap, player: location.player } }
  }
}

export const operatorChoiceLocator = new OperatorChoiceLocator()
