/** @jsxImportSource @emotion/react */
import { pointerWithin } from '@dnd-kit/core'
import { GameTable } from '@gamepark/react-game'
import { FC } from 'react'
import { PlayerPanels } from './players/PlayerPanels'
import { css } from '@emotion/react'

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
    />
      <PlayerPanels />
    </>
  )
}

function getTableSize(playerNumber:number):{xMin:number, xMax:number, yMin:number, yMax:number, margin:number} {
  switch (playerNumber){
    case 1:
      return {xMin:-30, xMax:12, yMin:-15, yMax:5, margin:35}
    case 2:
    case 3:
      return {xMin:-30, xMax:30, yMin:-15, yMax:15, margin:30}
    case 4:
    case 5:
    case 6:
    default:
      return {xMin:-30, xMax:40, yMin:-15, yMax:25, margin:35}
  }
}