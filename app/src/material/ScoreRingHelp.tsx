/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {  MaterialHelpProps, usePlayerId, useRules } from '@gamepark/react-game'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { ExplorationCardScores } from '@gamepark/trek12-amazonie/material/ExplorationCard'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Trans, useTranslation } from 'react-i18next'

export const ScoreRingHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const rules = useRules<Trek12AmazonieRules>()
    const player = usePlayerId()
    const isPlayer = item.location?.player === player

    const ringScoringPosition = item.location?.x ?? 0

    const scoreArray = ExplorationCardScores[rules?.material(MaterialType.ObservationCard).getItems()[item.location?.id].id]
    return <>
        <h2>{t(`score.ring.help.title`)}</h2>
        <p css={textCss} >
            {t(`score.ring.text`)}
        </p>
        {isPlayer
            ? <p><Trans defaults="score.ring.yours.scoring" values={{scoring : scoreArray[ringScoringPosition]}} ></Trans></p>
            : <p><Trans defaults="score.ring.theirs.scoring" values={{scoring : scoreArray[ringScoringPosition]}} ></Trans></p>
        }
    </>
}

const textCss = css`
    margin-top:0.5em;
`
