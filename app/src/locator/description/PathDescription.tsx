/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { css } from '@emotion/react'
import { spaceCoordinates } from '../ExplorationSpaceLocator'

export class PathDescription extends LocationDescription {

  height = 0.6
  width = 0.1

  alwaysVisible = true
  rotationUnit = 'rad'

  rules = () => null

  extraCss = css`background-color: black`

  getRotation(location: Location) {
    const coordinates = this.getPathCoordinates(location)
    return -Math.atan2(coordinates[0].x - coordinates[1].x, coordinates[0].y - coordinates[1].y)
  }

  getPathCoordinates(location: Location) {
    return [spaceCoordinates[location.id[0]], spaceCoordinates[location.id[1]]]
  }
}
