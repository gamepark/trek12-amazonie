/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const ExplorationMapHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isPlayer = item.id === player
  const playerName = usePlayerName(item.location?.player)

  return <>
    <h2>{t(`exploration.map.help.title`)}</h2>
    <p css={textCss}>{isPlayer ? t(`exploration.map.yours.help.text`) : <Trans defaults="exploration.map.theirs.help.text" values={{ player: playerName }} />}</p>
    <p css={textCss}>{t(`exploration.map.connexity.help.text`)}</p>
    <p css={textCss}>{t(`exploration.map.river.help.text`)}</p>
    <p css={textCss}>{t(`exploration.map.scoring.help.text`)}</p>
  </>
}

const textCss = css`
    margin-top:0.5em;
`
