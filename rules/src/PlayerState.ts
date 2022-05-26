import { createForest, ForestMap } from "./forests/Forest";
import Spot, { PathwaySpot } from "./material/Spot";

export default interface PlayerState {
  isReady:boolean
  observationsMade:PlayerObservation[]
  observationActualTurn?:number
  penalties:number
  score:ScoreTable
  operationTab:OperationCounter
  forest:Spot[]
  pathways:PathwaySpot[][]  // NEED TO BE SORTED BY DIGIT
  chooseBetweenPathways?:{pathwaySpotToAdd:PathwaySpot, pathsToChooseBetween:Spot[]}
}

export type ScoreTable = {
  obsScore:number,
  groupScore:number,
  pathwayScore:number,
  hazardScore:number
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
        score:{groupScore:0,hazardScore:0,obsScore:0,pathwayScore:0},
        pathways:[]
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