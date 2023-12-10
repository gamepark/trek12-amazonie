/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const PathwayScoreHelp = ({item}:MaterialHelpProps) => {
    const { t } = useTranslation()

    return <>
        <h2>{t(`pathway.score.help.title`)}</h2>
        <p><Trans defaults="pathway.score.text" values={{scoring:item.id}} ></Trans></p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
