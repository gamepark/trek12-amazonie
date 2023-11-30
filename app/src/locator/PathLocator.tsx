import { ItemLocator, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem, XYCoordinates } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import mean from 'lodash/mean'
import { nodeCoordinates } from './ExplorationNodeLocator'

export class PathLocator extends ItemLocator {
  parentItemType = MaterialType.ExplorationMap

  getPositionOnParent(location: Location, _context: MaterialContext): XYCoordinates {
    const coordinates = this.getPathCoordinates(location)
    return { x: mean(coordinates.map(c => c.x)), y: mean(coordinates.map(c => c.y)) }
  }

  getParentItemId(location: Location) {
    return location.player
  }

  getRotations(item: MaterialItem): string[] {
    const { location } = item
    const coordinates = this.getPathCoordinates(location)
    const rotateZ = -Math.atan2(coordinates[0].x - coordinates[1].x, coordinates[0].y - coordinates[1].y)
    return [`rotateZ(${rotateZ}rad)`]
  }

  getPathCoordinates(location: Location) {
    return [nodeCoordinates[location.id[0]], nodeCoordinates[location.id[1]]]
  }
}

export const pathLocator = new PathLocator()
