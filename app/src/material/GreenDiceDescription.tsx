/** @jsxImportSource @emotion/react */
import { CubicDiceDescription, ItemContext, MaterialContext, WritingDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import React from 'react'
import { css } from '@emotion/react'
import Face1 from '../images/dice/green/1.jpg'
import Face2 from '../images/dice/green/2.jpg'
import Face3 from '../images/dice/green/3.jpg'
import Face4 from '../images/dice/green/4.jpg'
import Face5 from '../images/dice/green/5.jpg'
import Face6 from '../images/dice/green/6.jpg'

export class GreenDiceDescription extends CubicDiceDescription {
  width = 2
  borderRadius = 0
  color= '#6db236'
  images = [
    Face1,
    Face2,
    Face3,
    Face4,
    Face5,
    Face6
  ]

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
