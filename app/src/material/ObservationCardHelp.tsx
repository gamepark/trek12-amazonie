/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, useRules } from '@gamepark/react-game'
import { ExplorationCardScores } from '@gamepark/trek12-amazonie/material/ExplorationCard'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { Trans, useTranslation } from 'react-i18next'

export const ObservationCardHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const isHidden = item.location?.rotation
  const scoreArray = ExplorationCardScores[item.id]
  const rules = useRules<Trek12AmazonieRules>()
  const player = usePlayerId()

  const ring = rules?.material(MaterialType.ScoreRing)
    .location(LocationType.ObservationScores)
    .locationId(item.location?.x)
    .player(player).getItem()?.location.x

  const number = rules?.material(MaterialType.NumberCard).location((l) => l.x === item.location?.x!).getItem()!.id - 1
  return <>
    <h2>{t(`observation.card.help.title`)}</h2>
    {isHidden
      ?
      <p css={textCss}>
        {t(`observation.card.hidden.help.text`, { number: number })}
      </p>
      :
      <p css={textCss}>
        <Trans defaults="observation.card.revelead.help.text" values={{ pointsEarned: scoreArray[ring] ?? 0, number: number }}></Trans>
        <span>{}</span>
      </p>
    }
  </>
}

const textCss = css`
    margin-top:0.5em;
`
