/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'
import { ScoreRingHelp } from './ScoreRingHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class ScoreRingDescription extends WritingDescription {
  width = 0.052 * EXPEDITION_MAP_SIZE
  height = 0.052 * EXPEDITION_MAP_SIZE
  borderRadius = 4
  help = ScoreRingHelp

  getFrontContent() {
    return <div css={circle}></div>
  }
}

const circle = css`
  border: 0.08em solid green;
  height: 100%;
  width: 100%;
  border-radius: 4em;
`

export const scoreRingDescription = new ScoreRingDescription()
