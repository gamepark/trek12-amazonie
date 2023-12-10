/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const SubTotalHelp = ({item}:MaterialHelpProps) => {
    const { t } = useTranslation()

    return <>
        <h2>{t(`sub.total.help.title`)}</h2>
        <p><Trans defaults={getScoringLabel(item.location?.id)} values={{scoring:item.id}} ></Trans></p>
    </>
}

const getScoringLabel = (idLabel:number):string => {
    switch (idLabel){
        case 0:
            return "sub.total.observations.text"
        case 1:
            return "sub.total.pathways.text"
        case 2:
            return "sub.total.areas.text"
        case 3:
        default:
            return "sub.total.dangers.text"

    }

}