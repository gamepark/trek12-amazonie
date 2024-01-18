/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import MinIcon from '../images/icons/min.jpg'
import Images from '../images/Images'
import { CrossHelp } from './CrossHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class CrossDescription extends WritingDescription {
  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.041 * EXPEDITION_MAP_SIZE
  help = CrossHelp

  getFrontContent() {
    return <span css={observationNumber}>X</span>
  }

  getImages(): string[] {
    return [
      ...super.getImages(),
      Images.MinusIcon,
      Images.MinIcon,
      Images.MaxIcon
    ]
  }

}

const observationNumber = css`
  font-size: ${0.0185 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
  color: black;
`

export const crossDescription = new CrossDescription()
