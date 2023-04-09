/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePlayer, usePlayerId } from "@gamepark/react-client";
import PlayerState from "@gamepark/trek12/PlayerState";
import { t } from "i18next";
import AvatarPanel from "./AvatarPanel";

type Props = {
    player:PlayerState
    position:number
}

export default function PlayerPanel({player, position}:Props){
    const playerId = usePlayerId<number>()
    const playerInfo = usePlayer(position+1)
    return (
        <div css={[playerPanelStyle(position)]}>
            <AvatarPanel playerInfo={playerInfo} playerId={position} />
            <h1 css={[nameStyle(position)]}>{playerInfo?.name === undefined ? `Player ${playerInfo?.id}` : playerInfo?.name}</h1>
        </div>
    )

}

const playerPanelStyle = (pos:number) => css`
    position:absolute;
    top:${0+pos*11}%;
    right:0%;
    width:100%;
    height:11%;
    color:black;
    background-color:rgba(255,255,255,0.8);
    border:0.1em black solid;
`

const nameStyle = (index:number) => css`
    position:absolute;
    left:2em;
    width:${6.2}em;
    height:90%;
    font-size: 2.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:black;
    margin:0.25em 0;
`