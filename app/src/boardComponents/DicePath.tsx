import { FC } from 'react'

export const DicePath: FC = () => null
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import { usePlay, usePlayerId } from "@gamepark/react-client";
// import MoveType from "@gamepark/trek12/moves/MoveType";
// import PlayerState, { Operand } from "@gamepark/trek12/PlayerState";
// import { ResetSelectedSpot, resetSelectedSpotMove } from "../localMoves/setSelectedSpot";
// import SetSelectedOperand, { ResetSelectedOperand, resetSelectedOperandMove, setSelectedOperandMove } from "../localMoves/setSelectedOperand";
// import DiceAnimation from "./DiceAnimation";
//
// type Props = {
//     dice:number[]
//     player:PlayerState
//     operandSelected?:Operand
//     selectedSpot?:number
// }
//
// export default function DicePath({dice, player, operandSelected, selectedSpot}:Props){
//     const playerId = usePlayerId<number>()
//
//     const play = usePlay()
//     const playResetSelectedSpot = usePlay<ResetSelectedSpot>()
//     const playResetSelectedOperand = usePlay<ResetSelectedOperand>()
//     const playSetSelectedOperand = usePlay<SetSelectedOperand>()
//
//     function clickOperand(operand:Operand){
//         if (selectedSpot !== undefined) {
//             play({type:MoveType.WriteNumber,operand:operand,playerId, index:selectedSpot})
//             playResetSelectedSpot(resetSelectedSpotMove(), {local:true})
//             playResetSelectedOperand(resetSelectedOperandMove(), {local:true})
//         } else {
//             playSetSelectedOperand(setSelectedOperandMove(operand), {local:true})
//         }
//     }
//
//     return (
//         <div css={[dicePathStyle]}>
//
//             <DiceAnimation dice={dice}/>
//             {player.operationTab.highDigit != 4    && <div css={[operandStyle(1, operandSelected === Operand.high)]} onClick={() => clickOperand(Operand.high)} > <span css={diceResultStyle}> ⇧ </span> </div>}
//             {player.operationTab.smallDigit != 4   && <div css={[operandStyle(2, operandSelected === Operand.small)]} onClick={() => clickOperand(Operand.small)}> <span css={diceResultStyle}> ⇩ </span > </div>}
//             {player.operationTab.minusOperand != 4 && <div css={[operandStyle(3, operandSelected === Operand.minus)]} onClick={() => clickOperand(Operand.minus)}> <span css={diceResultStyle}> - </span> </div>}
//             {player.operationTab.addOperand != 4   && <div css={[operandStyle(4, operandSelected === Operand.add)]} onClick={() => clickOperand(Operand.add)}  > <span css={diceResultStyle}> + </span> </div>}
//             {player.operationTab.timeOperand != 4  && <div css={[operandStyle(5, operandSelected === Operand.time)]} onClick={() => clickOperand(Operand.time)} > <span css={diceResultStyle}> x </span> </div>}
//
//         </div>
//     )
//
// }
//
// const operandStyle = (pos:number, isSelected:boolean) => css`
//     border-radius:100%;
//     border:${isSelected ? 0.4 : 0.1}em ${isSelected ? 'blue' : 'black'} solid;
//     background-color:white;
//     position:absolute;
//     bottom:${getBubblePosition(pos)[1]}em;
//     left:${getBubblePosition(pos)[0]}em;
//     width:5em;
//     height:5em;
//     z-index:2;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     color:black;
//     &:hover{
//         cursor:pointer;
//     }
// `
//
// function getBubblePosition(pos:number):number[]{
//     switch(pos){
//         case 1:
//             return [-7,-0.5]
//         case 2:
//             return [-3.5,-5]
//         case 3:
//             return [2,-5]
//         case 4:
//             return [7.5,-5]
//         case 5:
//             return [11,-0.5]
//         default : return [0,0]
//     }
// }
//
// const diceResultStyle = css`
//     font-size:3em;`
//
// const diceStyle = css`
//     border-radius:5%;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     position:absolute;
//     width:4em;
//     height:4em;
//     color:black;
//     border:0.1em black solid;
// `
//
// const diceUpStyle = css`
//     top:0em;
//     left:0em;
//     background-color:#82c702;
// `
//
// const diceLowStyle = css`
//     top:0em;
//     left:5em;
//     background-color:#fed330;
// `
//
// const dicePathStyle = css`
//     position:absolute;
//     width:15%;
//     height:5em;
//     top:0%;
//     left:50%;
//
// `