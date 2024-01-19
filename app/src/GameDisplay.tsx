/** @jsxImportSource @emotion/react */
import { pointerWithin } from '@dnd-kit/core'
import { css } from '@emotion/react'
import { GameTable, GameTableNavigation } from '@gamepark/react-game'
import { FC } from 'react'
import { PlayerPanels } from './players/PlayerPanels'

type GameDisplayProps = {
  players: number
}

export const GameDisplay: FC<GameDisplayProps> = ({ players }) => {
  const tableSizes = getTableSize(players)
  return (
    <>
      <GameTable
        xMin={tableSizes.xMin}
        xMax={tableSizes.xMax}
        yMin={tableSizes.yMin}
        yMax={tableSizes.yMax}
        collisionAlgorithm={pointerWithin}
        margin={{ top: 7.5, left: 0, right: tableSizes.margin, bottom: 0 }}
        //css={css`background-color: rgba(255, 255, 255, 0.47)`}
      >
        { players > 1 && <GameTableNavigation css={navigationPosition(players)} /> }
      </GameTable>
      {players !== 1 && <PlayerPanels/>}
    </>
  )
}
const navigationPosition = (index: number) => css`
  position: absolute;
  left: auto;
  right: 1em;
  top: ${8.5 + index * 14}em;
  width: 14em;
  height: 12em;
  > button {
    padding: 0;
    filter: drop-shadow(0.1em 0.1em 0.05em black);
  }
`

function getTableSize(playerNumber: number): { xMin: number, xMax: number, yMin: number, yMax: number, margin: number } {
  switch (playerNumber) {
    case 1:
      return { xMin: -30, xMax: 12, yMin: -15, yMax: 5, margin: 0 }
    case 2:
    case 3:
      return { xMin: -30, xMax: 30, yMin: -15, yMax: 15, margin: 30 }
    case 4:
    case 5:
    case 6:
    default:
      return { xMin: -30, xMax: 40, yMin: -15, yMax: 25, margin: 35 }
  }
}