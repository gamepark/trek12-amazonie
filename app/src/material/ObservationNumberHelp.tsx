/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ItemContext, MaterialHelpProps, useGame, usePlayer, usePlayerId, useRules } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { ExplorationCardScores } from '@gamepark/trek12-amazonie/material/ExplorationCard'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Trans, useTranslation } from 'react-i18next'

export const ObservationNumberHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()

    return <>
        <h2>{t(`observation.number.help.title`)}</h2>
        <p css={textCss} >
            <Trans defaults="observation.number.help.text" values={{targetNumber:item.id}}></Trans>
            <span>{}</span>
        </p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
