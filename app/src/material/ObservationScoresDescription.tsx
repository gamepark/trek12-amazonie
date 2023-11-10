/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game/dist/components/material/FlatMaterial/WritingDescription'
import { ItemContext, MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
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
    return <div css={container}>

      <span css={itemIdStyle}>{itemId}</span>
    </div>
  }

  rules = () => null

}

export const observationScoresDescription = new ObservationScoresDescription()

const container = css`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const itemIdStyle = css`
  font-size: 0.25em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;  
  color: black;
`
