/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game/dist/components/material/FlatMaterial/WritingDescription'
import { MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import React from 'react'
import { css } from '@emotion/react'

export class ObservationNumberDescription extends WritingDescription {
  height = 0.6
  width = 0.6

  getStaticItems(context: MaterialContext) {
    const { rules } = context
    const { players } = rules
    const numbers = rules
      .material(MaterialType.NumberCard)
      .sort((item) => item.location.x!)
      .getItems()
      .map((item) => item.id)

    return players.flatMap((player) => numbers.map((id, index) => ({
      id: id - 1,
      location: {
        id: index,
        type: LocationType.ObservationNumber,
        player
      },
    })))
  }

  getContent(itemId: any) {
    return <span css={observationNumber}>{itemId}</span>
  }

  rules = () => null

}

const observationNumber = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.3);
  text-align: center;
  color: black;
  font-size: 0.5em;
`

export const observationNumberDescription = new ObservationNumberDescription()