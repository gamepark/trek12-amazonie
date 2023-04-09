/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePlay, usePlayerId } from "@gamepark/react-client";
import { forestBasicFieldGraph, ForestMap } from "@gamepark/trek12/forests/Forest";
import Spot, { isAdjacent, isSpider, isSpotEmpty } from "@gamepark/trek12/material/Spot";
import PlayerState, { Operand } from "@gamepark/trek12/PlayerState";
import SetSelectedSpot, { ResetSelectedSpot, resetSelectedSpotMove, setSelectedSpotMove } from "../localMoves/setSelectedSpot";
import Images from "../images/Images";
import MoveType from "@gamepark/trek12/moves/MoveType";
import { ResetSelectedOperand, resetSelectedOperandMove } from "../localMoves/setSelectedOperand";
import Move from "@gamepark/trek12/moves/Move";
import { writeNumberMove } from "@gamepark/trek12/moves/WriteNumber";

type Props = {
    player:PlayerState
    selectedSpot?:number
    selectedOperand?:Operand
}

export default function Jungle({player, selectedSpot, selectedOperand}:Props){
    const playerId = usePlayerId<number>()
    const play = usePlay()
    const playSetSelectedSpot = usePlay<SetSelectedSpot>()
    const playResetSelectedSpot = usePlay<ResetSelectedSpot>()
    const playResetSelectedOperand = usePlay<ResetSelectedOperand>()

    const spotsAlreadyWrote:Spot[] = player.forest.filter(s => !isSpotEmpty(s) || s.isSpider)

    function clickForest(spotIndex:number){
        if (selectedOperand !== undefined) {
            play({type:MoveType.WriteNumber,operand:selectedOperand,playerId, index:spotIndex})
            playResetSelectedSpot(resetSelectedSpotMove(), {local:true})
            playResetSelectedOperand(resetSelectedOperandMove(), {local:true})
        } else {
            playSetSelectedSpot(setSelectedSpotMove(spotIndex), {local:true})
        } 
    }

    return (
        <div css={[jungleStyle]}>

            {player.forest.map((spot, index) => 
                <div css={spotStyle(spot)} key={index}> <span css={digitStyle}>{spot.digit}</span> </div>
            )}

            {
                player.forest.every(s => s.digit === null)
                    ? player.forest.map((spot, index) =>
                        <div css={[spotStyle(spot), selectable(selectedSpot === spot.index) ]} key={index} onClick={() => clickForest(spot.index)} > </div>
                    )
                    : player.forest.filter(emptySpot =>
                        spotsAlreadyWrote.some(wroteSpot =>
                            isAdjacent(emptySpot, wroteSpot) && (isSpotEmpty(emptySpot) && !isSpider(emptySpot))
                        )
                    ).map((spot, index) =>
                        <div css={[spotStyle(spot), selectable(selectedSpot === spot.index)]} key={index} onClick={() => clickForest(spot.index)} > </div>
                    )
            }
            
        </div>
    )

}

const selectable = (isSelected:boolean) => css`
    border:0.2em black solid;
    background-color:${isSelected ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0)'};
    &:hover{
        background-color:${isSelected ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)'};
        cursor:pointer;
    }
`

const spotStyle = (spot:Spot) => css`
    width:4.9em;
    height:4.9em;
    position:absolute;
    left:${4.2+spot.x*4.18}em;
    bottom:${19.5+spot.y*2.42}em;
    border-radius:100%;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
`

const digitStyle = css`
    font-size:3em;
`

const jungleStyle = css`
    position:absolute;
    width:50%;
    height:93%;
    top:0%;
    left:0%;
    background-image: url(${Images.forest1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

