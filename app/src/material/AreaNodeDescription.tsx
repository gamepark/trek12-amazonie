/** @jsxImportSource @emotion/react */
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { SpecialValue } from '@gamepark/trek12/material/Operator'
import { range } from 'lodash'
import React from 'react'
import { css } from '@emotion/react'
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class AreaNodeDescription extends WritingDescription {
  height = 0.104 * EXPEDITION_MAP_SIZE
  width = 0.104 * EXPEDITION_MAP_SIZE
  borderRadius= 4

  /*getStaticItems(_context: MaterialContext<number, number, number>): MaterialItem<number, number>[] {
    return range(27).map((index) => ({
      id: "#" + Math.floor(Math.random()*16777215).toString(16),
      location: {
        id: index,
        type: LocationType.ExpeditionNode,
        player: 1
      }
    }))
  }*/

  getFrontContent(itemId: any) {
    return (
      <div css={areaNode(itemId)} />
    )
  }

  rules = () => null

}

const areaNode = (id: string) => css`
  height: 100%;
  width: 100%;
  background-color: ${id}80;
  border-radius: 4em;
`

export const areaNodeDescription = new AreaNodeDescription()
