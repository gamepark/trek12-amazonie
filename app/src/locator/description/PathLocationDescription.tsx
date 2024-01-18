import { LocationContext, LocationDescription } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api/dist/material/location/Location'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { PlayerId } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { EXPEDITION_MAP_SIZE } from '../../material/utils/MapUtils'
import { nodeCoordinates } from '../ExplorationNodeLocator'

export class PathLocationDescription extends LocationDescription<PlayerId, MaterialType, LocationType> {
  height = 0.07 * EXPEDITION_MAP_SIZE
  width = 0.04 * EXPEDITION_MAP_SIZE
  borderRadius = 0.2
  rotationUnit = "rad"

  getRotateZ(location: Location<PlayerId, LocationType>, _context: LocationContext<PlayerId, MaterialType, LocationType>): number {
    const coordinates = this.getPathCoordinates(location)
    return -Math.atan2(coordinates[0].x - coordinates[1].x, coordinates[0].y - coordinates[1].y)
  }

  getPathCoordinates(location: Location) {
    return [nodeCoordinates[location.id[0]], nodeCoordinates[location.id[1]]]
  }
}
