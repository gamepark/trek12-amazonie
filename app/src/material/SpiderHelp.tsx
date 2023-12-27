/** @jsxImportSource @emotion/react */
import { MaterialHelpProps } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const SpiderHelp = ({item}:MaterialHelpProps) => {
    const { t } = useTranslation()

    return <>
        <h2>{t(`spider.help.title`)}</h2>
        <p><Trans defaults="spider.help.text" values={{scoring:item.id}} ></Trans></p>
    </>
}