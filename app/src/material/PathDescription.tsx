import { css } from '@emotion/react'
import { WritingDescription } from '@gamepark/react-game'
import { PathHelp } from './PathHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class PathDescription extends WritingDescription {
  getImages(): string[] {
    return []
  }

  height = 0.045 * EXPEDITION_MAP_SIZE
  width = 0.007 * EXPEDITION_MAP_SIZE
  thickness = 3
  help = PathHelp

  getFrontContent() {
    return <span css={path}/>
  }
}

const path = css`
  height: 100%;
  width: 100%;
  background-color: black;
`

export const pathDescription = new PathDescription()
