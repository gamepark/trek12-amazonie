/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { Score } from '@gamepark/trek12-amazonie/rules/helper/Score'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'
import { PathwayScoreHelp } from './PathwayScoreHelp'

export class PathwayScoreDescription extends WritingDescription {

  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.041 * EXPEDITION_MAP_SIZE

  getStaticItems(context: MaterialContext) {
    const { rules } = context
    const { players } = rules
    return players.flatMap((player) => new Score(rules.game, player)
      .pathwayScoreList
      .map((score, index) => ({
        id: score,
        location: {
          type: LocationType.PathwayScore,
          player,
          x: index,
        }
      }))
    )
  }

  getFrontContent(itemId: any) {
    return <span css={itemIdStyle}>{itemId}</span>
  }

  help = PathwayScoreHelp
}

export const pathwayScoreDescription = new PathwayScoreDescription()

const itemIdStyle = css`
  font-size: ${0.02 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;  
  color: black;
`
