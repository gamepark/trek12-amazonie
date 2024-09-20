/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faSpider } from '@fortawesome/free-solid-svg-icons/faSpider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ItemContext, WritingDescription } from '@gamepark/react-game'
import { isCreateItemType, MaterialMove } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { SpecialValue } from '@gamepark/trek12-amazonie/material/Operator'
import { Memory } from '@gamepark/trek12-amazonie/rules/Memory'
import { ExpeditionNodeNumberHelp } from './ExpeditionNodeNumberHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class ExpeditionNodeNumberDescription extends WritingDescription {
  height = 0.105 * EXPEDITION_MAP_SIZE
  width = 0.105 * EXPEDITION_MAP_SIZE
  borderRadius = 4
  help = ExpeditionNodeNumberHelp

  getFrontContent(itemId: any) {
    return (
      <>
        {
          itemId === SpecialValue.Spider ?
            <FontAwesomeIcon icon={faSpider} css={expeditionValue}/> :
            <span css={expeditionValue}>{itemId}</span>
        }

      </>
    )
  }

  canShortClick(move: MaterialMove, context: ItemContext) {
    const { rules, player, index } = context
    const canLongClick = super.canLongClick(move, context)
    if (!player) return canLongClick

    const item = rules.material(MaterialType.ExpeditionNodeValue).getItem(index)
    const placedNode = rules.remind(Memory.PlacedNode, player)
    if (placedNode !== undefined) {
      if (!isCreateItemType(MaterialType.Path)(move)) return false
      const hasMove = move.item.location.player === item.location.player &&
        move.item.location.id.filter((i: number) => i !== placedNode).includes(item.location.id)

      return canLongClick || hasMove
    }
    return canLongClick

  }
}

const expeditionValue = css`
  color: black;
  font-size: ${0.037 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
`

export const expeditionSpaceNumberDescription = new ExpeditionNodeNumberDescription()
