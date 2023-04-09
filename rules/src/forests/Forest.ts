import Spot, { Field } from "../material/Spot";
import { Operand } from "../PlayerState";

export enum ForestMap {Basic=1, Mangrove}
export const forestMaps = Object.values(ForestMap).filter(isForestMap)

function isForestMap(arg:string|ForestMap):arg is ForestMap{
    return typeof arg === 'number'
}

const F = Field.Forest
const W = Field.Water

export type forestGraphElement = {
    fieldType:Field
    index:number
    paths:number[]
    x:number
    y:number
}

export const forestBasicFieldGraph:forestGraphElement[] = [
    {fieldType:F, index:0, paths:[2,6,3], x:3, y:0},
    {fieldType:F, index:1, paths:[3,7,4], x:5, y:0},
    {fieldType:F, index:2, paths:[5,6,10,0], x:2, y:1},
    {fieldType:W, index:3, paths:[0,6,11,7,1], x:4, y:1},
    {fieldType:F, index:4, paths:[1,7,12,8], x:6, y:1},
    {fieldType:F, index:5, paths:[9,13,10,2], x:1, y:2},
    {fieldType:F, index:6, paths:[2,10,14,11,3,0], x:3, y:2},
    {fieldType:F, index:7, paths:[3,11,15,12,4,1], x:5, y:2},
    {fieldType:F, index:8, paths:[4,12,16], x:7, y:2},
    {fieldType:F, index:9, paths:[17,13,5], x:0, y:3},
    {fieldType:F, index:10, paths:[5,13,18,14,6,2], x:2, y:3},
    {fieldType:W, index:11, paths:[6,14,19,15,7,3], x:4, y:3},
    {fieldType:W, index:12, paths:[7,15,20,16,8,4], x:6, y:3},
    {fieldType:F, index:13, paths:[9,17,21,18,10,5], x:1, y:4},
    {fieldType:W, index:14, paths:[10,18,22,19,11,6], x:3, y:4},
    {fieldType:F, index:15, paths:[11,19,23,20,12,7], x:5, y:4},
    {fieldType:F, index:16, paths:[12,20,24,8], x:7, y:4},
    {fieldType:F, index:17, paths:[21,13,9], x:0, y:5},
    {fieldType:W, index:18, paths:[21,25,22,14,10,13], x:2, y:5},
    {fieldType:F, index:19, paths:[22,23,15,11,14], x:4, y:5},
    {fieldType:W, index:20, paths:[15,23,26,24,16,12], x:6, y:5},
    {fieldType:W, index:21, paths:[17,25,18,13], x:1, y:6},
    {fieldType:F, index:22, paths:[18,25,19,14], x:3, y:6},
    {fieldType:F, index:23, paths:[19,26,20,15], x:5, y:6},
    {fieldType:F, index:24, paths:[20,26,16], x:7, y:6},
    {fieldType:F, index:25, paths:[21,22,18], x:2, y:7},
    {fieldType:F, index:26, paths:[23,24,20], x:6, y:7}
]

// TODO : Coord NOT up to date
const forestMangroveFieldGraph:forestGraphElement[] = [
    {fieldType:F, index:0, paths:[7,4], x:0, y:0},
    {fieldType:W, index:1, paths:[4,8,5], x:0, y:0},
    {fieldType:F, index:2, paths:[5,9,6], x:0, y:0},
    {fieldType:W, index:3, paths:[6,10], x:0, y:0},
    {fieldType:F, index:4, paths:[0,7,11,8,1], x:0, y:0},
    {fieldType:F, index:5, paths:[1,8,9,2], x:0, y:0},
    {fieldType:W, index:6, paths:[2,9,12,10,3], x:0, y:0},
    {fieldType:F, index:7, paths:[11,4,0], x:0, y:0},
    {fieldType:W, index:8, paths:[4,11,13,5,1], x:0, y:0},
    {fieldType:F, index:9, paths:[5,12,6,2], x:0, y:0},
    {fieldType:F, index:10, paths:[6,12,14,3], x:0, y:0},
    {fieldType:F, index:11, paths:[7,16,13,8,4], x:0, y:0},
    {fieldType:W, index:12, paths:[17,14,10,6,9], x:0, y:0},
    {fieldType:W, index:13, paths:[11,16,21,8], x:0, y:0},
    {fieldType:F, index:14, paths:[12,17,24,18,10], x:0, y:0},
    {fieldType:F, index:15, paths:[19,20,16], x:0, y:0},
    {fieldType:W, index:16, paths:[15,20,21,13,11], x:0, y:0},
    {fieldType:W, index:17, paths:[23,24,14,12], x:0, y:0},
    {fieldType:F, index:18, paths:[14,24], x:0, y:0},
    {fieldType:F, index:19, paths:[20,15], x:0, y:0},
    {fieldType:F, index:20, paths:[19,15], x:0, y:0},
    {fieldType:F, index:21, paths:[16,22,13], x:0, y:0},
    {fieldType:F, index:22, paths:[21,23], x:0, y:0},
    {fieldType:F, index:23, paths:[22,17], x:0, y:0},
    {fieldType:F, index:24, paths:[17,18,14], x:0, y:0}

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

function getForestField(type:ForestMap):forestGraphElement[]{
    switch(type){
        case ForestMap.Basic: return forestBasicFieldGraph
        case ForestMap.Mangrove : return forestMangroveFieldGraph
    }
}

export function createForest(forestNumber:ForestMap):Spot[]{
    const result:Spot[] = []
    getForestField(forestNumber).forEach(elem => {result.push({...elem, digit:null, })})
    return result
}