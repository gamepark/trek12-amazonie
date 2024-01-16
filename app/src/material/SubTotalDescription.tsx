/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { Score } from '@gamepark/trek12-amazonie/rules/helper/Score'
import React from 'react'
import { SubTotalHelp } from './SubTotalHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export enum SubTotalId {
  Observations,
  Pathways,
  Areas,
  Danger
}

export class SubTotalDescription extends WritingDescription {


  height = 0.045 * EXPEDITION_MAP_SIZE
  width = 0.073 * EXPEDITION_MAP_SIZE
  help = SubTotalHelp

  getStaticItems(context: MaterialContext) {
    const { rules } = context
    const { players } = rules
    return players
      .flatMap((player) => {
        const score = new Score(rules.game, player)
        return [
          { id: score.observationScore, location: { type: LocationType.SubTotalScore, player, id: SubTotalId.Observations } },
          { id: score.pathwayScore, location: { type: LocationType.SubTotalScore, player, id: SubTotalId.Pathways } },
          { id: score.areaScore, location: { type: LocationType.SubTotalScore, player, id: SubTotalId.Areas } },
          { id: score.dangerScore, location: { type: LocationType.SubTotalScore, player, id: SubTotalId.Danger } }
        ]
      })

  }

  getFrontContent(itemId: any) {
    return <span css={itemIdStyle}>{itemId}</span>
  }
}

const itemIdStyle = css`
    font-size: ${0.027 * EXPEDITION_MAP_SIZE}em;
    font-weight: bold;
    font-family: 'Rock Salt', cursive;
    color: black;

`

export const subTotalDescription = new SubTotalDescription()
