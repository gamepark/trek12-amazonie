import { Field } from '../material/Field'

export enum ForestMap {Basic=1, Mangrove}
export const forestMaps = Object.values(ForestMap).filter(isForestMap)

function isForestMap(arg:string|ForestMap):arg is ForestMap{
    return typeof arg === 'number'
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
