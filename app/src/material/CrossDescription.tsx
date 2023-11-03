/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game/dist/components/material/FlatMaterial/WritingDescription'
import { MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import React from 'react'
import { css } from '@emotion/react'

export class CrossDescription extends WritingDescription {
  height = 0.6
  width = 0.6

  getFrontContent() {
    return <span css={observationNumber}>X</span>
  }

  rules = () => null

}

const observationNumber = css`
  position: absolute;
  width: 100%;
  height: 100%;
  //background-color: rgba(255, 0, 0, 0.3);
  font-weight: bold;
  text-align: center;
  color: black;
  font-size: 0.5em;
`

export const crossDescription = new CrossDescription()
