/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, useRules } from '@gamepark/react-game'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Trans, useTranslation } from 'react-i18next'

export const CrossHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const rules = useRules<Trek12AmazonieRules>()
    const player = usePlayerId()

    const crossesMade = rules?.material(MaterialType.Cross)
        .location(LocationType.OperatorChoice)
        .player(player)
        .getItems()
        .filter(obj => obj.location.id === item.location?.id).length 

    const crossesRemaining = crossesMade !== undefined ? 4-crossesMade : 0

        

    return <>
        <h2>{t(`cross.help.title`)}</h2>
        <p css={textCss} >
            {t(`cross.help.text`)}
        </p>
        <p><Trans defaults="cross.help.remaining" values={{crossesRemaining}}></Trans></p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
