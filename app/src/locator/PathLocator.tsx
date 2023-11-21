import { ItemLocator, MaterialContext } from '@gamepark/react-game'
import { Location, XYCoordinates } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import mean from 'lodash/mean'
import { pathDescription } from '../material/PathDescription'
import { PathDescription } from './description/PathDescription'

export class PathLocator extends ItemLocator {
  parentItemType = MaterialType.ExplorationMap
  locationDescription = new PathDescription()

  getPositionOnParent(location: Location, _context: MaterialContext): XYCoordinates {
    const coordinates = pathDescription.getPathCoordinates(location)
    return { x: mean(coordinates.map(c => c.x)), y: mean(coordinates.map(c => c.y)) }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const pathLocator = new PathLocator()
