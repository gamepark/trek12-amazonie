/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationHelpProps, usePlayerId} from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const AreaNodeHelp = (props: LocationHelpProps) => {
    console.log("THE PLAYER >>> IL EST ICIIIIIIIII", props.location.player, "<=============")
    const { t } = useTranslation()
    const player = usePlayerId()
    const isPlayer = player

    return <>
        <h2>{t(`area.node.help.title`)}</h2>
        <p css={textCss}>{isPlayer ? t(`area.node.yours.help.text`) : t(`area.node.theirs.help.text`)}</p>

    </>
}

const textCss = css`
    margin-top:0.5em;
`
