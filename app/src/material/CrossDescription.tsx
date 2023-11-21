/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'

export class CrossDescription extends WritingDescription {
  height = 0.5
  width = 0.55

  getFrontContent() {
    return <span css={observationNumber}>X</span>
  }

  rules = () => null

}

const observationNumber = css`
  font-size: 0.25em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
  color: black;
`

export const crossDescription = new CrossDescription()
