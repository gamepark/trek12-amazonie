/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const DangerTickHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isThePlayer = item.location?.player === player
  const playerName = usePlayerName(item.location?.player)

  return <>
    <h2>{t(`danger.tick.help.title`)}</h2>
    <p css={textCss}>
      {t('danger.tick.help.text')}
    </p>
    <p css={textCss}>
      {isThePlayer
        ? <Trans defaults="danger.tick.help.yours.score" values={{ tickNumber: +item.quantity! }}></Trans>
        : <Trans defaults="danger.tick.help.theirs.score" values={{ tickNumber: +item.quantity!, player: playerName }}></Trans>}
    </p>
  </>
}

// {action, plural, one{# action} other{# actions}}
const textCss = css`
    margin-top:0.5em;
`
