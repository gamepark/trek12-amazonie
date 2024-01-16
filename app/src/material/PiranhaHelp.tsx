/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps, usePlayerId } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const PiranhaHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isThePlayer = item.location?.player === player
  return <>
    <h2>{t(`piranha.help.title`)}</h2>
    <p css={textCss}>
      {isThePlayer
        ? <Trans defaults="piranha.help.yours.text"></Trans>
        : <Trans defaults="piranha.help.theirs.text"></Trans>}
    </p>
  </>
}

const textCss = css`
    margin-top:0.5em;
`
