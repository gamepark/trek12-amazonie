/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { PathwayScoreHelp } from './PathwayScoreHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class PathwayScoreDescription extends WritingDescription {

  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.041 * EXPEDITION_MAP_SIZE
  help = PathwayScoreHelp

  getFrontContent(itemId: any) {
    return <span css={itemIdStyle}>{itemId}</span>
  }
}

export const pathwayScoreDescription = new PathwayScoreDescription()

const itemIdStyle = css`
  font-size: ${0.02 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;  
  color: black;
`
