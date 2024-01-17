/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Picture } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'
import Images from '../images/Images'

export const GreenDiceHelp = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t(`green.dice.help.title`)}</h2>
    <p css={textCss}>{t(`green.dice.help.text`)}</p>
    <p css={diceCss}>
      <Picture src={Images.greenDice1}/>&nbsp;
      <Picture src={Images.greenDice2}/>&nbsp;
      <Picture src={Images.greenDice3}/>&nbsp;
      <Picture src={Images.greenDice4}/>&nbsp;
      <Picture src={Images.greenDice5}/>&nbsp;
      <Picture src={Images.greenDice6}/>
    </p>
  </>
}

const diceCss = css`
    margin-top:0.5em;
    margin-bottom:0.5em;
    & > Picture > img {
        height:2em;
        width:2em;
    }
`

const textCss = css`
    margin-top:0.5em;
    margin-bottom:0.5em;
`
