/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import React from 'react'

export class PathDescription extends WritingDescription {
  height = 0.6
  width = 0.1

  getFrontContent() {
    return <span css={path} />
  }

  rules = () => null
}

const path = css`
  height: 100%;
  width: 100%;
  background-color: black;
`

export const pathDescription = new PathDescription()
