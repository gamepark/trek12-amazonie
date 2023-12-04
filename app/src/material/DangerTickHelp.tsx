/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, useRules } from '@gamepark/react-game'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { Trans, useTranslation } from 'react-i18next'

export const DangerTickHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const player = usePlayerId()
    const isThePlayer = item.location?.player === player
    
    return <>
        <h2>{t(`danger.tick.help.title`)}</h2>
        <p css={textCss} >
            {isThePlayer 
            ? <Trans defaults="danger.tick.help.yours.text" values={{cardNumber:item.quantity}}></Trans> 
            : <Trans defaults="danger.tick.help.theirs.text" values={{cardNumber:item.quantity}}></Trans>}
        </p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
