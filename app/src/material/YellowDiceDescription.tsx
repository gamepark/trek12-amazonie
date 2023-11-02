/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { GreenDiceDescription } from './GreenDiceDescription'

export class YellowDiceDescription extends GreenDiceDescription {
  getFrontContent(itemId: any) {
    return <span css={diceValue}>{itemId}</span>
  }

}

const diceValue = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  //font-size: 0.5em;
`

export const yellowDiceDescription = new YellowDiceDescription()