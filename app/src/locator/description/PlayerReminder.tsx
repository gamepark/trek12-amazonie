/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Avatar, usePlayerName, useRules } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { FC } from 'react'

type PlayerReminderProps = {
  location: Location
}
export const PlayerReminder: FC<PlayerReminderProps> = (props) => {
  const { location } = props
  const { player } = location
  const rules = useRules<Trek12AmazonieRules>()
  const playerNumber = rules!.game.players.length

  const playerName = usePlayerName(player)

  if (playerNumber !== 1) {
    return (
      <div css={reminderStyle}>
        <Avatar css={avatarStyle} playerId={player} speechBubbleProps={{ css: css`display:none;` }}/>
        <span css={playerNameStyle}>{playerName}</span>
      </div>
    )
  } else {
    return <></>
  }
}

const size = 1.4

const reminderStyle = css`
  color: white;
  white-space: nowrap;
  display: flex;
  height: ${size}em;
`

const avatarStyle = css`
  position: absolute;
  top: -0.1em;
  left: -0.5em;
  border-radius: 100%;
  height: ${size}em;
  width: ${size}em;
  color: black;
`

const playerNameStyle = css`
  font-size: ${size / 2.5}em;
  padding: 0.2em;
  padding-left: 2.2em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 20em;
  align-self: center;
  flex: 1;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
`
