/** @jsxImportSource @emotion/react */
import { WritingDescription, MaterialContext } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import React from 'react'
import { css } from '@emotion/react'
import { ExplorationCardScores } from '@gamepark/trek12/material/ExplorationCard'

export class ObservationScoresDescription extends WritingDescription {
  height = 0.5
  width = 0.5

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
  font-size: 0.25em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;  
  color: black;
`
