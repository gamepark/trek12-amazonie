/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, Picture } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'
import Images from '../images/Images'

export const NumberCardHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    return <>
        <h2>{t(`number.card.help.title`)}</h2>
        <p css={textCss} >
            <Trans defaults="number.card.help.text" values={{cardNumber:item.id-1}}></Trans>
        </p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
