/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class AreaNodeDescription extends WritingDescription {
  height = 0.105 * EXPEDITION_MAP_SIZE
  width = 0.105 * EXPEDITION_MAP_SIZE
  borderRadius = 4

  getFrontContent(itemId: any) {
    return (
      <div css={areaNode(itemId)}/>
    )
  }

}

const areaNode = (id: string) => css`
  height: 100%;
  width: 100%;
  background-color: ${id}90;
  border-radius: 4em;
`

export const areaNodeDescription = new AreaNodeDescription()
