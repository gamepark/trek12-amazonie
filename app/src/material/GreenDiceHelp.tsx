/** @jsxImportSource @emotion/react */
import { MaterialHelpProps, Picture, usePlayerId, usePlayerName } from "@gamepark/react-game";
import { useTranslation } from "react-i18next";
import Images from "../images/Images";
import { css } from "@emotion/react";

export const GreenDiceHelp = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
    const { t } = useTranslation()
    return <>
        <h2>{t(`green.dice.help.title`)}</h2>
        <p css={textCss}>{t(`green.dice.help.text`)}</p>
        <p css={diceCss}> <Picture src={Images.greenDice1}/> <Picture src={Images.greenDice2}/> <Picture src={Images.greenDice3}/> <Picture src={Images.greenDice4}/> <Picture src={Images.greenDice5}/> <Picture src={Images.greenDice6}/></p>
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
