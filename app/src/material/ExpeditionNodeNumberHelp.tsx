/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, useRules } from '@gamepark/react-game'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { Trans, useTranslation } from 'react-i18next'

export const ExpeditionNodeNumberHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const player = usePlayerId()
    const isThePlayer = item.location?.player === player
    console.log("coucou")
    return <>
        <h2>{t(`spider.help.title`)}</h2>
        <p css={textCss} >
            {isThePlayer 
            ? <Trans defaults="spider.help.yours.text"></Trans> 
            : <Trans defaults="spider.help.theirs.text"></Trans>}
        </p>
        <p>{t(`spider.how.help.title`)}</p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
