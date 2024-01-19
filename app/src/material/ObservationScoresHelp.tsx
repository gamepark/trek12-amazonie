/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const ObservationScoresHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isPlayer = item.location?.player === player
  const playerName = usePlayerName(item.location?.player)

  return <>
    <h2>{t(`observation.scores.help.title`)}</h2>
    <p css={textCss}>
      {
        isPlayer? <Trans defaults="observation.scores.help.text" values={{ targetNumber: item.id }}></Trans>
        : <Trans defaults="observation.scores.help.text.other" values={{ targetNumber: item.id, player: playerName }}></Trans>
      }

    </p>
  </>
}

const textCss = css`
    margin-top:0.5em;
`
