/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import { ExplorationCardScores } from '@gamepark/trek12-amazonie/material/ExplorationCard'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class ObservationScoresDescription extends WritingDescription {
  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.037 * EXPEDITION_MAP_SIZE

  getStaticItems(context: MaterialContext) {
    const { rules } = context
    const { players } = rules
    const observations = rules
      .material(MaterialType.ObservationCard)
      .sort((item) => item.location.x!)
      .getItems()

    return players.flatMap((player) =>
      observations
        .flatMap((item) => {
          const { id = undefined, location: { x } } = item
            if (!id) return []
            return ExplorationCardScores[id].map((points: number, index: number) => ({
              id: points,
              location: {
                id: x,
                type: LocationType.ObservationScores,
                player,
                x: index
              },
            }))
          },
        ),
    )
  }

  getFrontContent(itemId: any) {
    return <span css={itemIdStyle}>{itemId}</span>
  }

  rules = () => null

}

export const observationScoresDescription = new ObservationScoresDescription()

const itemIdStyle = css`
  font-size: ${0.0185 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;  
  color: black;
`
