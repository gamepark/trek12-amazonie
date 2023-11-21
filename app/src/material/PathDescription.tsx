/** @jsxImportSource @emotion/react */
import { WritingDescription } from "@gamepark/react-game"
import { Location, MaterialItem } from '@gamepark/rules-api'
import React from 'react'
import { css } from '@emotion/react'
import { nodeCoordinates } from '../locator/ExplorationNodeLocator'

export class PathDescription extends WritingDescription {
  height = 0.1
  width = 0.6

  getFrontContent() {
    return <span css={path} />
  }

  getRotateZ(item: MaterialItem) {
    const { location } = item
    const coordinates = this.getPathCoordinates(location)
    return -Math.atan2(coordinates[0].x - coordinates[1].x, coordinates[0].y - coordinates[1].y)
  }

  getPathCoordinates(location: Location) {
    return [nodeCoordinates[location.id[0]], nodeCoordinates[location.id[1]]]
  }

  rules = () => null
}

const path = css`
  background-color: black;
`

export const pathDescription = new PathDescription()
