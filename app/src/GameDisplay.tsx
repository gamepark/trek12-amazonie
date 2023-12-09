/** @jsxImportSource @emotion/react */
import { pointerWithin } from '@dnd-kit/core'
import { GameTable, useGame, usePlayers, useRules } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { PlayerPanels } from './players/PlayerPanels'
import { css } from '@emotion/react'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'


export const GameDisplay = () => {
  const rules = useRules<Trek12AmazonieRules>()
  const game = useGame<MaterialGame>()
  if (!game) return null;
  const hasGameMoreThanThreePlayers = game.players.length > 3
  return (
    <>
    <GameTable
      xMin={hasGameMoreThanThreePlayers ? -30 : -30}
      xMax={hasGameMoreThanThreePlayers ? 42 : 30}
      yMin={-15}
      yMax={hasGameMoreThanThreePlayers ? 25 : 15}
      collisionAlgorithm={pointerWithin}
      margin={{ top: 7.5, left: 0, right: 30, bottom: 0 }}
      css={css`background-color: rgba(255, 255, 255, 0.47)`}
    />
      <PlayerPanels />
    </>
  )
}
