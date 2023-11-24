/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { Area } from '@gamepark/trek12/rules/helper/Area'
import { Pathway } from '@gamepark/trek12/rules/helper/Pathway'
import { PlayerId } from '@gamepark/trek12/Trek12Options'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class AreaScoreDescription extends WritingDescription {

  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.041 * EXPEDITION_MAP_SIZE

  getPlayerAreaScore(player: PlayerId, context: MaterialContext): MaterialItem[] {
    const { rules } = context
    const nodesIds: number[] = []
    const values = rules
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(player)
      .getItems()

    const items: MaterialItem[] = []
    let x = 0;
    for (const valueNode of values) {
      if (nodesIds.includes(valueNode.location.id)) continue
      const area = new Area(rules.game, player, valueNode)
      nodesIds.push(...area.nodeIds)
      if (!area.score) continue
      items.push({
        id: area.score,
        location: {
          type: LocationType.AreaScore,
          player,
          x: x++,
        }
      })
    }

    return items
  }

  getStaticItems(context: MaterialContext) {
    const { rules } = context
    const { players } = rules
    return players.flatMap((player) => this.getPlayerAreaScore(player, context))
  }

  getFrontContent(itemId: any) {
    return <span css={itemIdStyle}>{itemId}</span>
  }
}

export const areaScoreDescription = new AreaScoreDescription()

const itemIdStyle = css`
  font-size: ${0.02 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;  
  color: black;
`
