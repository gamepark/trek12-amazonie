/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { AreaScoreHelp } from './AreaScoreHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class AreaScoreDescription extends WritingDescription {

  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.041 * EXPEDITION_MAP_SIZE
  help = AreaScoreHelp

  getFrontContent(itemId: any) {
    return <span css={itemIdStyle}>{itemId}</span>
  }
}

export const areaScoreDescription = new AreaScoreDescription()

const itemIdStyle = css`
  font-size: ${0.02 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
  color: black;
`
