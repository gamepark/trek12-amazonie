/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ItemContext, MaterialHelpProps, useGame, usePlayer, usePlayerId, useRules } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { ExplorationCardScores } from '@gamepark/trek12-amazonie/material/ExplorationCard'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Trans, useTranslation } from 'react-i18next'

export const AreaNodeHelp = () => {
    const { t } = useTranslation()
    const player = usePlayerId()
    const isPlayer = true

    return <>
        <h2>{t(`area.node.help.title`)}</h2>
        <p css={textCss}>{isPlayer ? t(`area.node.yours.help.text`) : t(`area.node.theirs.help.text`)}</p>

    </>
}

const textCss = css`
    margin-top:0.5em;
`
