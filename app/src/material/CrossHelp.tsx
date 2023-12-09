/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ItemContext, MaterialHelpProps, useGame, usePlayer, usePlayerId, useRules } from '@gamepark/react-game'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { Trans, useTranslation } from 'react-i18next'

export const CrossHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const rules = useRules<Trek12AmazonieRules>()
    const crossesRemaning = item.location?.x ? 3-item.location.x : undefined

    return <>
        <h2>{t(`cross.help.title`)}</h2>
        <p css={textCss} >
            {t(`ccross.help.text`)}
        </p>
        <p><Trans defaults="cross.help.remaining" values={{crossesRemaning}}></Trans></p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
