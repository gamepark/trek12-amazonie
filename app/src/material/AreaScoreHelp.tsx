/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const AreaScoreHelp = ({item}:MaterialHelpProps) => {
    const { t } = useTranslation()

    return <>
        <h2>{t(`area.score.help.title`)}</h2>
        <p><Trans defaults="area.score.text" values={{scoring:item.id}} ></Trans></p>
    </>
}