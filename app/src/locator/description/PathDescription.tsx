/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { Location } from '@gamepark/rules-api/dist/material/location/Location'
import { pathDescription } from '../../material/PathDescription'

export class PathDescription extends LocationDescription {

  height = 0.6
  width = 0.1

  alwaysVisible = true
  rotationUnit = 'rad'

  rules = () => null

  getRotateZ(location: Location) {
    const coordinates = pathDescription.getPathCoordinates(location)
    console.log("Rotate Z ?")
    return -Math.atan2(coordinates[0].x - coordinates[1].x, coordinates[0].y - coordinates[1].y)
  }

  extraCss = css`background-color: black`
}
