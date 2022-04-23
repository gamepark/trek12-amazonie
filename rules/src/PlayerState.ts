import { createForest, ForestMap } from "./forests/Forest";
import Spot from "./material/Spot";

export default interface PlayerState {
  isReady:boolean
  observationsMade:number[]
  penalties:number
  score:number
  operationTab:OperationCounter
  forest:Spot[]
}

export function setupPlayers(forest:ForestMap = ForestMap.Basic, nbPlayers:number):PlayerState[]{
  const playerTemplate:PlayerState={
        isReady:false,
        forest:createForest(forest), 
        observationsMade:[0,0,0],
        operationTab:{smallDigit:0, highDigit:0, addOperand:0, minusOperand:0, timeOperand:0},
        penalties:0,
        score:0
  }
  return [...new Array(nbPlayers)].map(() => (playerTemplate))
}

type OperationCounter = {
  smallDigit:number
  highDigit:number
  minusOperand:number
  addOperand:number
  timeOperand:number
}