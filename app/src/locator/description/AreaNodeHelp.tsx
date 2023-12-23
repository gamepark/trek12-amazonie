/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationHelpProps, useLegalMoves, usePlayerId} from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const AreaNodeHelp = (props: LocationHelpProps) => {
    const { t } = useTranslation()
    const player = usePlayerId()
    const isPlayer = props.location.player === player
    const moves = useLegalMoves()
    const isLegalNode = isPlayer && moves.some(move => move.itemType === 7 && props.location.id === move.item.location.id)

    console.log(moves, props.location)

    return <>
        <h2>{t(`area.node.help.title`)}</h2>
        <p css={textCss}>{isPlayer ? t(`area.node.yours.help.text`) : t(`area.node.theirs.help.text`)}</p>
        {isLegalNode && <p>coucou</p>}

    </>
}

const textCss = css`
    margin-top:0.5em;
`
