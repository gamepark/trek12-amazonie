import { LocationDescription, Locator, MaterialContext } from '@gamepark/react-game'
import { Location, XYCoordinates } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import mean from 'lodash/mean'
import { explorationMapDescription } from '../material/ExplorationMapDescription'
import { nodeCoordinates } from './ExplorationNodeLocator'

export class PathLocator extends Locator {
  locationDescription = new LocationDescription({ width: 0.8, height: 1.3, borderRadius: 0.2 })
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)

  getPositionOnParent(location: Location, _context: MaterialContext): XYCoordinates {
    const coordinates = this.getPathCoordinates(location)
    return { x: mean(coordinates.map(c => c.x)), y: mean(coordinates.map(c => c.y)) }
  }

  getPathCoordinates(location: Location) {
    return [nodeCoordinates[location.id[0]], nodeCoordinates[location.id[1]]]
  }

  coordinates = { z: 0.05 }

  rotationUnit = 'rad'

  getRotateZ(location: Location) {
    const coordinates = this.getPathCoordinates(location)
    return -Math.atan2(coordinates[0].x - coordinates[1].x, coordinates[0].y - coordinates[1].y)
  }
}

export const pathLocator = new PathLocator()
