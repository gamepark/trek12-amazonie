/** @jsxImportSource @emotion/react */
import { MaterialHelpProps, Picture, usePlayerId, usePlayerName } from "@gamepark/react-game";
import { useTranslation } from "react-i18next";
import Images from "../images/Images";
import { css } from "@emotion/react";

export const YellowDiceHelp = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
    const { t } = useTranslation()
    return <>
        <h2>{t(`yellow.dice.help.title`)}</h2>
        <p css={textCss}>{t(`yellow.dice.help.text`)}</p>
        <p css={diceCss}><Picture src={Images.yellowDice0}/> <Picture src={Images.yellowDice1}/> <Picture src={Images.yellowDice2}/> <Picture src={Images.yellowDice3}/> <Picture src={Images.yellowDice4}/> <Picture src={Images.yellowDice5}/></p>
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
