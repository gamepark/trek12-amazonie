/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Avatar, Player, SpeechBubbleDirection } from "@gamepark/react-client";
import { Picture } from "@gamepark/react-components";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import Images from "../images/Images";

type Props = {
    playerInfo : Player | undefined
    playerId:number
}

const AvatarPanel : FC<Props> = ({playerInfo, playerId}) => {

    const {t} = useTranslation()

    return(

        <div css={[avatarStyle, roundBorders]}>
            {(playerInfo?.avatar)
                ? <Avatar playerId={playerId} css={[roundBorders, toFullSize]} speechBubbleProps={{direction:SpeechBubbleDirection.BOTTOM_LEFT}} /> 
                : <Picture alt={t('Player avatar')} src={Images.oustiti} css={[roundBorders, toFullSize, ouistitiStyle]} draggable={false} />
            }
        </div>

    )

}

const avatarStyle = css`
    position:absolute;
    float:left;
    margin:0.4em 0.4em;
    height:4em;
    width:4em;
    transform:translateZ(0.0em);
    transform-style:preserve-3d;
    border:0.15em black solid;
    overflow:hidden;
`

const roundBorders = css`
    border-radius:100%;
    color:black;
`

const toFullSize = css`
    width:100%;
    height:100%;
`

const ouistitiStyle = css`
   transform:scale(3.2) translate(-0.35em, 0.8em); 
`

export default AvatarPanel