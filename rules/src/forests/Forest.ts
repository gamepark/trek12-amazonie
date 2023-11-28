import Spot, { Field } from '../material/Spot'
import { Operand } from '../PlayerState'

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

export const ForestBasicFieldTypes: Field[] = [
    Field.Forest, // 0
    Field.Forest, // 1
    Field.Forest, // 2
    Field.Forest, // 3
    Field.Forest, // 4
    Field.Water, // 5
    Field.Water, // 6
    Field.Water, // 7
    Field.Water, // 8
    Field.Forest, // 9
    Field.Water, // 10
    Field.Forest, // 11
    Field.Forest, // 12
    Field.Forest, // 13
    Field.Forest, // 14
    Field.Forest, // 15
    Field.Water, // 16
    Field.Forest, // 17
    Field.Water, // 18
    Field.Forest, // 19
    Field.Forest, // 20
    Field.Forest, // 21
    Field.Forest, // 22
    Field.Forest, // 23
    Field.Forest, // 24
    Field.Forest, // 25
    Field.Forest, // 25
]

// TODO : Coord NOT up to date
      const forestMangroveFieldGraph:Field[] = [
//           {fieldType:F, index:0, paths:[7,4], x:0, y:0},
//           {fieldType:W, index:1, paths:[4,8,5], x:0, y:0},
//           {fieldType:F, index:2, paths:[5,9,6], x:0, y:0},
//           {fieldType:W, index:3, paths:[6,10], x:0, y:0},
//           {fieldType:F, index:4, paths:[0,7,11,8,1], x:0, y:0},
//           {fieldType:F, index:5, paths:[1,8,9,2], x:0, y:0},
//           {fieldType:W, index:6, paths:[2,9,12,10,3], x:0, y:0},
//           {fieldType:F, index:7, paths:[11,4,0], x:0, y:0},
//           {fieldType:W, index:8, paths:[4,11,13,5,1], x:0, y:0},
//           {fieldType:F, index:9, paths:[5,12,6,2], x:0, y:0},
//           {fieldType:F, index:10, paths:[6,12,14,3], x:0, y:0},
//           {fieldType:F, index:11, paths:[7,16,13,8,4], x:0, y:0},
//           {fieldType:W, index:12, paths:[17,14,10,6,9], x:0, y:0},
//           {fieldType:W, index:13, paths:[11,16,21,8], x:0, y:0},
//           {fieldType:F, index:14, paths:[12,17,24,18,10], x:0, y:0},
//           {fieldType:F, index:15, paths:[19,20,16], x:0, y:0},
//           {fieldType:W, index:16, paths:[15,20,21,13,11], x:0, y:0},
//           {fieldType:W, index:17, paths:[23,24,14,12], x:0, y:0},
//           {fieldType:F, index:18, paths:[14,24], x:0, y:0},
//           {fieldType:F, index:19, paths:[20,15], x:0, y:0},
//           {fieldType:F, index:20, paths:[19,15], x:0, y:0},
//           {fieldType:F, index:21, paths:[16,22,13], x:0, y:0},
//           {fieldType:F, index:22, paths:[21,23], x:0, y:0},
//           {fieldType:F, index:23, paths:[22,17], x:0, y:0},
//           {fieldType:F, index:24, paths:[17,18,14], x:0, y:0}

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

function getForestField(type:ForestMap):Field[]{
    switch(type){
        case ForestMap.Basic: return ForestBasicFieldTypes
        case ForestMap.Mangrove : return forestMangroveFieldGraph
    }
}

export function createForest(forestNumber:ForestMap):Spot[]{
    const result:Spot[] = []
    //getForestField(forestNumber).forEach(elem => {result.push({...elem, digit:null, })})
    return result
}
