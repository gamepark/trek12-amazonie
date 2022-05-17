import { createForest, ForestMap } from "./forests/Forest";
import { Observation } from "./GameState";
import Spot from "./material/Spot";

export default interface PlayerState {
  isReady:boolean
  observationsMade:PlayerObservation[]
  observationActualTurn?:number
  penalties:number
  score:number
  operationTab:OperationCounter
  forest:Spot[]
}

export type PlayerObservation = {
  discoveringValue:number
  discoveringCount:number
}

export function setupPlayers(forest:ForestMap = ForestMap.Basic, nbPlayers:number, discoveringValues:number[]):PlayerState[]{
  const playerTemplate:PlayerState={
        isReady:false,
        forest:createForest(forest), 
        observationsMade:[{discoveringValue:discoveringValues[0], discoveringCount:0},{discoveringValue:discoveringValues[1], discoveringCount:0},{discoveringValue:discoveringValues[2], discoveringCount:0}],
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

export enum Operand {small=1, high, minus, add, time}