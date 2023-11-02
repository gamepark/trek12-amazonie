/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game/dist/components/material/FlatMaterial/WritingDescription'
import { MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import React from 'react'
import { css } from '@emotion/react'

export class ExpeditionSpaceNumberDescription extends WritingDescription {
  height = 1.4
  width = 1.4
  borderRadius= 4

  getFrontContent(itemId: any) {
    return <span css={expeditionValue}>{itemId}</span>
  }

  rules = () => null

}

const expeditionValue = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 0.9em;
`

export const expeditionSpaceNumberDescription = new ExpeditionSpaceNumberDescription()