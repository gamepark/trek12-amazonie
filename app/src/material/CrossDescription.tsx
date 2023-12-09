/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'
import { CrossHelp } from './CrossHelp'

export class CrossDescription extends WritingDescription {
  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.041 * EXPEDITION_MAP_SIZE

  getFrontContent() {
    return <span css={observationNumber}>X</span>
  }

  help = CrossHelp

}

const observationNumber = css`
  font-size: ${0.0185 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
  color: black;
`

export const crossDescription = new CrossDescription()
