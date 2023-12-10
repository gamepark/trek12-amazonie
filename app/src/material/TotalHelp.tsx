/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const TotalHelp = ({item}:MaterialHelpProps) => {
    const { t } = useTranslation()

    return <>
        <h2>{t(`total.help.title`)}</h2>
        <p><Trans defaults="total.help.text" values={{scoring:item.id}} ></Trans></p>
    </>
}