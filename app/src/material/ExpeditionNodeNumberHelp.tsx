/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { SpecialValue } from '@gamepark/trek12-amazonie/material/Operator'
import { Trans, useTranslation } from 'react-i18next'

export const ExpeditionNodeNumberHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isThePlayer = item.location?.player === player
  const isSpider = item.id === SpecialValue.Spider
  const playerName = usePlayerName(item.location?.player)
  return <>
    <h2>{t(`exploration.node.number.help.title`)}</h2>
    {isSpider && (
      <p css={textCss}>
        {t('exploration.node.spider.text')}
      </p>
    )}
    <p css={textCss}>
      {isThePlayer && <Trans defaults="exploration.node.number.yours" values={{ value: item.id }} />}
      {!isThePlayer && <Trans defaults="exploration.node.number.theirs" values={{ value: item.id, player: playerName }}></Trans>}
    </p>
  </>
}

const textCss = css`
  margin-top: 0.5em;
`
