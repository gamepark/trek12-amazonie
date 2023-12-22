/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Avatar, usePlayerName } from '@gamepark/react-game'
import { FC } from 'react'
import { Location } from "@gamepark/rules-api"

type PlayerReminder = {
  location: Location
}
export const PlayerReminder: FC<PlayerReminder> = (props) => {
  const { location } = props
  const { player } = location
  const playerName = usePlayerName(player)

  return (
      <div css={reminderStyle}>
        <Avatar css={avatarStyle} playerId={player} />
        <span css={playerNameStyle}>{playerName}</span>
      </div>
  )
}

const size=1.4

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
  font-size: ${size/2.5}em;
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
