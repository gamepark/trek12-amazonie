/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game'
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
      <>
        {
          itemId === SpecialValue.Spider?
            <FontAwesomeIcon icon={faSpider} css={expeditionValue} />:
            <span css={expeditionValue}>{itemId}</span>
        }

      </>
    )
  }

  rules = () => null

}

const expeditionValue = css`
  color: black;
  font-size: 0.5em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
`

export const expeditionSpaceNumberDescription = new ExpeditionSpaceNumberDescription()
