/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game/dist/components/material/FlatMaterial/WritingDescription'
import { MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import React from 'react'
import { css } from '@emotion/react'

export class CrossDescription extends WritingDescription {
  height = 0.5
  width = 0.55

  getFrontContent() {
    return (
      <div css={container}>
        <span css={observationNumber}>X</span>
      </div>
    )
  }

  rules = () => null

}
const container = css`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const observationNumber = css`
  font-size: 0.25em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
  color: black;
`

export const crossDescription = new CrossDescription()
