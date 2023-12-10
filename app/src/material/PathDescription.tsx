/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'
import { PathHelp } from './PathHelp'

export class PathDescription extends WritingDescription {
  height = 0.045 * EXPEDITION_MAP_SIZE
  width = 0.007 * EXPEDITION_MAP_SIZE
  thickness = 3

  getFrontContent() {
    return <span css={path} />
  }

  help = PathHelp
}

const path = css`
  height: 100%;
  width: 100%;
  background-color: black;
`

export const pathDescription = new PathDescription()
