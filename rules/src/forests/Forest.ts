import Spot, { Field } from "../material/Spot";
import { Operand } from "../PlayerState";

export enum ForestMap {Basic=1, Mangrove}
export const forestMaps = Object.values(ForestMap).filter(isForestMap)

function isForestMap(arg:string|ForestMap):arg is ForestMap{
    return typeof arg === 'number'
}

const _ = null
const F = Field.Forest
const W = Field.Water
const O = Field.OOB

const forestBasicField = [
    [O, _, F, _, O, _, F, _],
    [_, W, _, F, _, F, _, F],
    [F, _, W, _, F, _, O, _],
    [_, F, _, W, _, F, _, F],
    [F, _, F, _, W, _, O, _],
    [_, F, _, F, _, F, _, F],
    [O, _, F, _, W, _, F, _],
    [_, O, _, F, _, F, _, O],
]

const forestMangroveField = [
    [_, _, _, F, _, _, _, _],
    [_, _, F, _, F, _, F, _],
    [_, W, _, _, _, W, _, F],
    [_, _, W, _, _, _, F, _],
    [_, F, _, _, _, W, _, _],
    [F, _, W, _, F, _, F, _],
    [_, F, _, F, _, W, _, _],
    [F, _, W, _, F, _, W, _],
]

export enum ForestOperandFeats {Boat = 1, Plane}
type OperandFeat = {
    operand:Operand,
    feat:ForestOperandFeats
}

const forestBasicOperandFeats: OperandFeat[] = [
    {operand:Operand.high, feat:ForestOperandFeats.Boat}
]

const forestMangroveOperandFeats:OperandFeat[] = [
    {operand:Operand.small, feat:ForestOperandFeats.Boat},
    {operand:Operand.time, feat:ForestOperandFeats.Plane}
]

export function getOperandFeat(forestMap:ForestMap, operand:Operand):ForestOperandFeats|null{
    switch(forestMap){
        case ForestMap.Basic:return forestBasicOperandFeats.find(feat => feat.operand === operand)?.feat ?? null
        case ForestMap.Mangrove:return forestMangroveOperandFeats.find(feat => feat.operand === operand)?.feat ?? null
    }
}

function getForestField(type:ForestMap):(Field|null)[][]{
    switch(type){
        case ForestMap.Basic: return forestBasicField
        case ForestMap.Mangrove : return forestMangroveField
    }
}

export function createForest(forestNumber:ForestMap):Spot[]{
    const forestField:(Field|null)[][] = getForestField(forestNumber)
    const result:Spot[] = []
    for(let i=0;i<forestField.length;i++){
        for (let j=0;j<forestField[i].length;j++){
            if(forestField[i][j] !== null && forestField[i][j] !== O){
                result.push({x:j,y:i,digit:null,fieldType:forestField[i][j]!})
            }
        }
    }

    if(forestNumber === ForestMap.Mangrove){
        // TODO : find a way to add the three spots which are disaligned !
    }

    console.log("forest created : ", result)

    return result
}