/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game/dist/components/material/FlatMaterial/WritingDescription'
import { MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { SpecialValue } from '@gamepark/trek12/material/Operator'
import React from 'react'
import { css } from '@emotion/react'
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ExpeditionSpaceNumberDescription extends WritingDescription {
  height = 1.4
  width = 1.4
  borderRadius= 4

  getFrontContent(itemId: any) {
    return (
      <div css={container}>
        {
          itemId === SpecialValue.Spider?
            <FontAwesomeIcon icon={faSpider} css={expeditionValue} />:
            <span css={expeditionValue}>{itemId}</span>
        }

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

const expeditionValue = css`
  color: black;
  font-size: 0.5em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
`

export const expeditionSpaceNumberDescription = new ExpeditionSpaceNumberDescription()
