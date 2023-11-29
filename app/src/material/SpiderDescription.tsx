/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faSpider } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class SpiderDescription extends WritingDescription {
  width = 0.0315 * EXPEDITION_MAP_SIZE
  height = 0.0223 * EXPEDITION_MAP_SIZE
  borderRadius = 0.3

  getFrontContent() {
    return <FontAwesomeIcon icon={faSpider} css={expeditionValue}/>
  }
}

const expeditionValue = css`
  color: black;
  font-size: ${0.030 * EXPEDITION_MAP_SIZE}em;
`

export const spiderDescription = new SpiderDescription()
