/** @jsxImportSource @emotion/react */
import { ItemContext, WritingDescription } from '@gamepark/react-game'
import { isCreateItemType } from '@gamepark/rules-api/dist/material/moves/items/CreateItem'
import { MaterialMove } from '@gamepark/rules-api/dist/material/moves/MaterialMove'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { SpecialValue } from '@gamepark/trek12/material/Operator'
import { Memory } from '@gamepark/trek12/rules/Memory'
import React from 'react'
import { css } from '@emotion/react'
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { explorationMapDescription } from './ExplorationMapDescription'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class ExpeditionNodeNumberDescription extends WritingDescription {
  height = 0.104 * EXPEDITION_MAP_SIZE
  width = 0.104 * EXPEDITION_MAP_SIZE
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

  canShortClick(move: MaterialMove, context: ItemContext) {
    const { rules, player, index } = context
    const canLongClick = super.canLongClick(move, context)
    if (!player) return canLongClick

    const item = rules.material(MaterialType.ExpeditionNodeValue).index(index).getItem()!
    const placedNode = rules.remind(Memory.PlacedNode, player)
    if (placedNode !== undefined) {
      if (!isCreateItemType(MaterialType.Path)(move)) return false
      const hasMove = move.item.location.player === item.location.player &&
        move.item.location.id.filter((i: number) => i !== placedNode).includes(item.location.id)

      return canLongClick || hasMove
    }
    return canLongClick

  }

  rules = () => null

}

const expeditionValue = css`
  color: black;
  font-size: ${0.037 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
`

export const expeditionSpaceNumberDescription = new ExpeditionNodeNumberDescription()
