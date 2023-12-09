/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'
import { ObservationNumberHelp } from './ObservationNumberHelp'

export class ObservationNumberDescription extends WritingDescription {
  height = 0.045 * EXPEDITION_MAP_SIZE
  width = 0.045 * EXPEDITION_MAP_SIZE

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

  getFrontContent(itemId: any) {
    return <span css={observationNumber}>{itemId}</span>
  }

  help = ObservationNumberHelp

}

const observationNumber = css`
  color: black;
  font-size: ${0.022 * EXPEDITION_MAP_SIZE}em;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
`

export const observationNumberDescription = new ObservationNumberDescription()
