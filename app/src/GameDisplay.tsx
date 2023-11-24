/** @jsxImportSource @emotion/react */
import { pointerWithin } from '@dnd-kit/core'
import { GameTable } from '@gamepark/react-game'
import { PlayerPanels } from './players/PlayerPanels'
import { css } from '@emotion/react'


export const GameDisplay = () => {
  return (
    <>
    <GameTable
      xMin={-30}
      xMax={30}
      yMin={-15}
      yMax={15}
      collisionAlgorithm={pointerWithin}
      margin={{ top: 7.5, left: 0, right: 30, bottom: 0 }}
      css={css`background-color: rgba(255, 255, 255, 0.47)`}
    />
      <PlayerPanels />
    </>
  )
}
