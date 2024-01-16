/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const ObservationScoresHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()

  return <>
    <h2>{t(`observation.scores.help.title`)}</h2>
    <p css={textCss}>
      <Trans defaults="observation.scores.help.text" values={{ targetNumber: item.id }}></Trans>
    </p>
  </>
}

const textCss = css`
    margin-top:0.5em;
`
