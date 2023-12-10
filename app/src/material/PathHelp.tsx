/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'

export const PathHelp = () => {
    const { t } = useTranslation()

    return <>
        <h2>{t(`path.help.title`)}</h2>
        <p css={textCss}>{t(`path.text`)}</p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
