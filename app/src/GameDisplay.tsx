/** @jsxImportSource @emotion/react */
import { pointerWithin } from '@dnd-kit/core'
import { css } from '@emotion/react'
import { GameTable } from '@gamepark/react-game'
import { FC } from 'react'
import { PlayerPanels } from './players/PlayerPanels'

type GameDisplayProps = {
  players: number
}

export const GameDisplay: FC<GameDisplayProps> = ({ players }) => {
  const hasGameMoreThanThreePlayers = players > 3
  return (
    <>
    <GameTable
      xMin={hasGameMoreThanThreePlayers ? -30 : -30}
      xMax={hasGameMoreThanThreePlayers ? 40 : 30}
      yMin={-15}
      yMax={hasGameMoreThanThreePlayers ? 25 : 15}
      collisionAlgorithm={pointerWithin}
      margin={{ top: 7.5, left: 0, right: hasGameMoreThanThreePlayers ? 35 : 30, bottom: 0 }}
      css={css`background-color: rgba(255, 255, 255, 0.47)`}
    />
      <PlayerPanels />
    </>
  )
}
