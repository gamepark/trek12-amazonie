/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { Score } from '@gamepark/trek12-amazonie/rules/helper/Score'
import React from 'react'
import { TotalHelp } from './TotalHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class TotalDescription extends WritingDescription {


  height = 0.078 * EXPEDITION_MAP_SIZE
  width = 0.095 * EXPEDITION_MAP_SIZE
  help = TotalHelp

  getStaticItems(context: MaterialContext) {
    const { rules } = context
    const { players } = rules
    return players
      .map((player) => {
        const score = new Score(rules.game, player)
        return { id: score.total, location: { type: LocationType.TotalScore, player, x: 0 } }
      })
  }

  getFrontContent(itemId: any) {
    return <span css={itemIdStyle}>{itemId}</span>
  }
}

const itemIdStyle = css`
  font-size: ${0.035 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
  color: black;

`

export const totalDescription = new TotalDescription()
