/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const ExpeditionNodeNumberHelp = ({item}:MaterialHelpProps)=> {
    const { t } = useTranslation()
    const player = usePlayerId()
    const isThePlayer = item.location?.player === player
    const isSpider = item.id === "spider"
    return <>
        <h2>{t(`exploration.node.number.help.title`)}</h2>
        <p css={textCss} >
            {isThePlayer 
            ? isSpider 
                ? <Trans defaults="exploration.node.spider.yours.text"></Trans>
                : <Trans defaults="exploration.node.number.yours.text" values={{value:item.id}}></Trans>
            : isSpider 
                ? <Trans defaults="exploration.node.spider.theirs.text"></Trans>
                :<Trans defaults="exploration.node.number.theirs.text" values={{value:item.id}}></Trans>}
        </p>
    </>
}

const textCss = css`
    margin-top:0.5em;
`
