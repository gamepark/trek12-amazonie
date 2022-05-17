import { ForestOperandFeats, getOperandFeat } from "../forests/Forest";
import GameState from "../GameState";
import GameView from "../GameView";
import { getDiceResultWithOperand } from "../material/Dice";
import Spot, { Coordinates, Field } from "../material/Spot";
import PlayerState, { Operand } from "../PlayerState";
import MoveType from "./MoveType";

type WriteNumber = {
    type:MoveType.WriteNumber
    operand:Operand
    playerId:number
} & Coordinates

export default WriteNumber

export function writeNumberMove(operand:Operand, x:number, y:number, playerId:number):WriteNumber{
    return {type:MoveType.WriteNumber, operand, x, y, playerId}
}

export function writeNumber(state:GameState|GameView, move:WriteNumber){
    const numberWrote:number = getDiceResultWithOperand(move.operand, state.dice)
    const player:PlayerState = state.players[move.playerId-1]
    const spotFilled:Spot = player.forest.find(s => s.x === move.x && s.y === move.y)!; 

    if(spotFilled.fieldType === Field.Water && getOperandFeat(state.forestMap,move.operand) !== ForestOperandFeats.Boat){
        spotFilled.isPiranha = true
    }
    
    if(numberWrote > 12){
        spotFilled.isSpider = true
    } else {
        spotFilled.digit = numberWrote
        player.isReady = true
    }

    if(state.observation.some(obs => obs.discoveringValue === numberWrote)){
        player.observationActualTurn = numberWrote
    }

}