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
        .flatMap(({ id = undefined, location: { x } }) => {
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
    return <div css={itemIdContainer}>

      <span css={itemIdStyle}>{itemId}</span>
    </div>
  }

  rules = () => null

}

export const observationScoresDescription = new ObservationScoresDescription()

const itemIdContainer = css`
  height: 100%;
  width: 100%;
  //background-color: white;
  background-color: rgba(255, 0, 0, 0.3);
  //border: 0.01em solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const itemIdStyle = css`
  font-size: 0.35em;
  color: black;
`