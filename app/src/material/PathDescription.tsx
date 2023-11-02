/** @jsxImportSource @emotion/react */
import { WritingDescription } from "@gamepark/react-game"
import React from 'react'
import { css } from '@emotion/react'

export class PathDescription extends WritingDescription {
  height = 0.2
  width = 0.6

  getFrontContent() {
    return <span css={path} />
  }

  rules = () => null
}

const path = css`
  background-color: black;
`

export const pathDescription = new PathDescription()