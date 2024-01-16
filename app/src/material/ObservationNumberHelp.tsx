/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const ObservationNumberHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()

  return <>
    <h2>{t(`observation.number.help.title`)}</h2>
    <p css={textCss}>
      <Trans defaults="observation.number.help.text" values={{ targetNumber: item.id }}></Trans>
      <span>{}</span>
    </p>
  </>
}

const textCss = css`
    margin-top:0.5em;
`
