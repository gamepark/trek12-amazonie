import { ForestOperandFeats, getOperandFeat } from '../forests/Forest'
import GameView from '../GameView'
import { getDiceResultWithOperand } from '../material/Dice'
import Spot, { Field, getAdjacentSpots, PathwaySpot } from '../material/Spot'
import PlayerState, { Operand } from '../PlayerState'
import MoveType from './MoveType'

type WriteNumber = {
    type:MoveType.WriteNumber
    operand:Operand
    playerId:number
    index:number
}

type GameState = any

export default WriteNumber

export function writeNumberMove(operand:Operand, playerId:number, index:number):WriteNumber{
    return {type:MoveType.WriteNumber, operand, index, playerId}
}

export function writeNumber(state:GameState|GameView, move:WriteNumber){
    const numberWrote:number = getDiceResultWithOperand(move.operand, state.dice)
    const player:PlayerState = state.players[move.playerId-1]
    const spotFilled:Spot = player.forest.find(s => s.index === move.index)!; 


    if(spotFilled.fieldType === Field.Water && getOperandFeat(state.forestMap,move.operand) !== ForestOperandFeats.Boat){
        spotFilled.isPiranha = true
    }
    
    if(numberWrote > 12){
        spotFilled.isSpider = true
    } else {
        spotFilled.digit = numberWrote
        

    // Managing pathways

        const adjacentNonNullSpots = getAdjacentSpots(spotFilled, player.forest).filter(as => as.digit !== null)
        console.log("Avant",player.pathways)

        if(player.pathways.length === 0){
            player.pathways.push([{index:spotFilled.index, digit:spotFilled.digit!}])
        } else {
            player.pathways.forEach(pathway => {
            
                const eligibleSpotForPathway:Spot[] = adjacentNonNullSpots.filter(as => (as.index === pathway[0].index && Math.abs(spotFilled.digit! - pathway[0].digit) === 1) 
                    || (as.index === pathway[pathway.length-1].index && Math.abs(spotFilled.digit! - pathway[pathway.length-1].digit) === 1))
        
                if (eligibleSpotForPathway.length === 0){
                    console.log("add to potential")
                    player.pathways.push([{index:spotFilled.index, digit:spotFilled.digit!}])
                } else if(eligibleSpotForPathway.length === 1){
                    const pathToFill:PathwaySpot[] = player.pathways.find(path => path.some(s => s.index === eligibleSpotForPathway[0].index))!
                    pathToFill.push({index:spotFilled.index, digit:spotFilled.digit!})
                    pathToFill.sort((a,b) => a.digit-b.digit)
                } else {
                    player.chooseBetweenPathways = {pathwaySpotToAdd:{index:spotFilled.index, digit:spotFilled.digit!}, pathsToChooseBetween:eligibleSpotForPathway}
                    player.isReady = false
                }
    
            })
        } 

        console.log("Après : ",player.pathways)

    }

    if(state.observation.some((obs : any) => obs.discoveringValue === numberWrote)){
        player.observationActualTurn = numberWrote
    }

    player.isReady = true
    switch(move.operand){
        case Operand.add:player.operationTab.addOperand++;break;
        case Operand.high:player.operationTab.highDigit++;break;
        case Operand.minus:player.operationTab.minusOperand++;break;
        case Operand.small:player.operationTab.smallDigit++;break;
        case Operand.time:player.operationTab.timeOperand++;break;
    }

}