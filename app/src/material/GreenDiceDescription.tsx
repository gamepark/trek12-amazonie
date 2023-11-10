/** @jsxImportSource @emotion/react */
import { ItemContext, MaterialContext, WritingDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import React from 'react'
import { css } from '@emotion/react'

export class GreenDiceDescription extends WritingDescription {
  height = 2
  width = 2
  rules = () => null

  getFrontContent(itemId: any, context: MaterialContext) {
    const { rules } = context
    const dice = rules.material(MaterialType.GreenDice).id(itemId).getItem()!
    return <span css={diceValue}>{dice.location.rotation}</span>
  }

  getRotation(item: MaterialItem<number, number>, _context: ItemContext<number, number, number>): string {
    return ''
  }
}

const diceValue = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  //font-size: 0.5em;
`

export const greenDiceDescription = new GreenDiceDescription()
