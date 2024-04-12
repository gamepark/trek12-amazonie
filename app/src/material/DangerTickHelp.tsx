/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { Score } from '@gamepark/trek12-amazonie/rules/helper/Score'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { Trans, useTranslation } from 'react-i18next'

export const DangerTickHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const rules = useRules<Trek12AmazonieRules>()!
  const isThePlayer = item.location?.player === player
  const playerName = usePlayerName(item.location?.player)
  const tickNumber = new Score(rules.game, item.location!.player!).dangerCount

  return <>
    <h2>{t(`danger.tick.help.title`)}</h2>
    <p css={textCss}>
      {t('danger.tick.help.text')}
    </p>
    <p css={textCss}>
      {isThePlayer
        ? <Trans defaults="danger.tick.help.yours.score" values={{ tickNumber }}></Trans>
        : <Trans defaults="danger.tick.help.theirs.score" values={{ tickNumber, player: playerName }}></Trans>}
    </p>
  </>
}

// {action, plural, one{# action} other{# actions}}
const textCss = css`
    margin-top:0.5em;
`
