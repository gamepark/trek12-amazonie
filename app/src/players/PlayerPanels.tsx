/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PlayerPanel, usePlayers, useRules } from '@gamepark/react-game'
import { FC, HTMLAttributes } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Trek12AmazoniePlayerPanelProps = {
} & HTMLAttributes<HTMLDivElement>

export const PlayerPanels: FC<Trek12AmazoniePlayerPanelProps> = ({...props}) => {
  const players = usePlayers({ sortFromMe: true })
  const rules = useRules<Trek12AmazonieRules>()

  return (
    <>
      {players.map((player, index) =>
        <PlayerPanel key={player.id} playerId={player.id} css={panelPosition(index)} {...props}>
          <div css={indicators}>

            <span><FontAwesomeIcon icon={faStar} css={fontIcon} fill="#28B8CE"/> {rules?.getScore(player.id)}</span>
            

          </div>
        </PlayerPanel>
      )}
    </>
  )
}
const panelPosition = (index: number) => css`
  position: absolute;
  right: 1em;
  top: ${8.5 + index * 14}em;
  width: 28em;
  height: 12em;
`

const indicators = css`
  width: 100%;
  height:4em;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0.4em;
  left: 0.8em;
  flex-wrap: wrap;

  & > span {
    font-size:2.5em;
    font-family: 'Rock Salt',cursive;
  }

`

const fontIcon = css`
  font-size: 1.2em;
  color: #28B8CE;
`