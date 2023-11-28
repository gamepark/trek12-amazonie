/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { Score } from '@gamepark/trek12/rules/helper/Score'
import React from 'react'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class DangerTickDescription extends WritingDescription {
  width = 0.018 * EXPEDITION_MAP_SIZE
  height = 0.018 * EXPEDITION_MAP_SIZE
  borderRadius = 4

  getStaticItems(context: MaterialContext): MaterialItem[] {
    const { rules } = context
    const { players } = rules
    return players.map((player) => {
      const score = new Score(rules.game, player)
      return {
          quantity: score.dangerCount,
          location: {
            type: LocationType.DangerTick,
            player
          }
        }
    })
  }

  getFrontContent(_itemId: any, _context: MaterialContext<number, number, number>): React.ReactNode | undefined {
    return <div css={circle}>X</div>
  }

  rules = () => null
}

const circle = css`
  //background-color: red;
  font-size: ${0.018 * EXPEDITION_MAP_SIZE}em;
  color: red;
  font-weight: bold;
  font-family: 'Rock Salt', cursive;
  border-radius: 4em;
`

export const dangerTickDescription = new DangerTickDescription()
