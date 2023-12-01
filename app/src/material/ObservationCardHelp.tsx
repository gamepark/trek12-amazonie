/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ItemContext, MaterialHelpProps, useGame, usePlayer, usePlayerId, useRules } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { ExplorationCardScores } from '@gamepark/trek12-amazonie/material/ExplorationCard'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Trans, useTranslation } from 'react-i18next'

export const ObservationCardHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const isHidden = item.location?.rotation
    const scoreArray = ExplorationCardScores[item.id]
    const rules = useRules<Trek12AmazonieRules>()
    const player = usePlayerId()

    const ring = rules?.material(MaterialType.ScoreRing)
      .location(LocationType.ObservationScores)
      .locationId(item.location?.x)
      .player(player).getItem()?.location.x

    return <>
        <h2>{t(`observation.card.help.title`)}</h2>
        {isHidden 
        ?
        <p css={textCss} >
            {t(`observation.card.hidden.help.text`)}
        </p>
        :
        <p css={textCss} >
            <Trans defaults="observation.card.revelead.help.text" values={{pointsEarned:scoreArray[ring]}}></Trans>
            <span>{}</span>
        </p>
        }
    </>
}

const textCss = css`
    margin-top:0.5em;
`
