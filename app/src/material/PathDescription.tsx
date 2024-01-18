/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import Images from '../images/Images'
import { PathHelp } from './PathHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class PathDescription extends WritingDescription {
  height = 0.045 * EXPEDITION_MAP_SIZE
  width = 0.007 * EXPEDITION_MAP_SIZE
  thickness = 3
  help = PathHelp

  getFrontContent() {
    return <span css={path}/>
  }

  getImages(): string[] {
    return [
      ...super.getImages(),
      Images.MinusIcon
    ]
  }
}

const path = css`
  height: 100%;
  width: 100%;
  background-color: black;
`

export const pathDescription = new PathDescription()
