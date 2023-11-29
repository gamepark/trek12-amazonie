/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, Picture } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'
import Images from '../images/Images'

export const ObservationCardHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const isHidden = item.location?.rotation
    return <>
        <h2>{t(`observation.card.help.title`)}</h2>
        {isHidden 
        ?
        <p css={textCss} >
            <Trans defaults="observation.card.hidden.help.text" values={{pointsEarned:item.id}}></Trans>
        </p>
        :
        <p css={textCss} >
            <Trans defaults="observation.card.revelead.help.text" values={{pointsEarned:item.id}}></Trans>
        </p>
        }
    </>
}

const textCss = css`
    margin-top:0.5em;
`
