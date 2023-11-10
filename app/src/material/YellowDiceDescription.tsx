/** @jsxImportSource @emotion/react */
import { MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import React from 'react'
import { css } from '@emotion/react'
import { GreenDiceDescription } from './GreenDiceDescription'

export class YellowDiceDescription extends GreenDiceDescription {
  getFrontContent(itemId: any, context: MaterialContext) {
    const { rules } = context
    const dice = rules.material(MaterialType.YellowDice).id(itemId).getItem()!
    return <span css={diceValue}>{dice.location.rotation}</span>
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
