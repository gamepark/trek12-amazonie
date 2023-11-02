/** @jsxImportSource @emotion/react */
import { MaterialContext, WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { css } from '@emotion/react'

export class ScoreRingDescription extends WritingDescription {
  width = 0.7
  height = 0.7
  borderRadius = 4

  getFrontContent(_itemId: any, _context: MaterialContext<number, number, number>): React.ReactNode | undefined {
    return <div css={circle}></div>
  }

  rules = () => null
}

const circle = css`
  border: 0.08em solid green;
  height: 100%;
  width: 100%;
  border-radius: 4em;
`

export const scoreRingDescription = new ScoreRingDescription()