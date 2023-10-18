/** @jsxImportSource @emotion/react */
import { WritingDescription } from '@gamepark/react-game/dist/components/material/FlatMaterial/WritingDescription'
import { ItemContext, MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import React from 'react'
import { css } from '@emotion/react'

export class ObservationNumber extends WritingDescription {
  height = 1
  width = 1

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
    return <span css={css`color: black; font-size: 0.5em`}>{itemId}</span>
  }

  rules = () => null

}

export const observationNumber = new ObservationNumber()