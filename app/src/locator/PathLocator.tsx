import { ItemLocator, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem, XYCoordinates } from '@gamepark/rules-api'
import { PathDescription } from './description/PathDescription'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { spaceCoordinates } from './ExplorationSpaceLocator'
import mean from 'lodash/mean'

export class PathLocator extends ItemLocator {
  parentItemType = MaterialType.ExplorationMap
  locationDescription = new PathDescription()

  getRotateZ(item: MaterialItem): number {
    return this.locationDescription.getRotation(item.location)
  }

  getPositionOnParent(location: Location, _context: MaterialContext): XYCoordinates {
    const coordinates = this.locationDescription.getPathCoordinates(location)
    return { x: mean(coordinates.map(c => c.x)), y: mean(coordinates.map(c => c.y)) }
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const pathLocator = new PathLocator()
