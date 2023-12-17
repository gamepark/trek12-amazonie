/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { getPlayerName } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Trans, useTranslation } from 'react-i18next'

export const CrossHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const rules = useRules<Trek12AmazonieRules>()
    const player = usePlayerId()
    const opponentName = usePlayerName(item.location?.player)

    

    const crossesMade = rules?.material(MaterialType.Cross)
        .location(LocationType.OperatorChoice)
        .player(item.location?.player)
        .getItems()
        .filter(obj => obj.location.id === item.location?.id).length 

    const crossesRemaining = crossesMade !== undefined ? 4-crossesMade : 0
    const isThePlayer = item.location?.player === player
        

    return <>
        <h2>{t(`cross.help.title`)}</h2>
        <p css={textCss} >
            {t(`cross.help.text`)}
        </p>
        {isThePlayer
            ? <p><Trans defaults="cross.help.yours.remaining" values={{crossesRemaining}}></Trans></p>
            : <p><Trans defaults="cross.help.theirs.remaining" values={{crossesRemaining, opponentName}}></Trans></p>
        }
        

    </>
}

const textCss = css`
    margin-top:0.5em;
`
