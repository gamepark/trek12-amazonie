import { forestGraphElement } from "../forests/Forest"

type Spot = {
    digit:number|null
    isPiranha?:true
    isSpider?:true
} & forestGraphElement

export default Spot

export enum Field {Forest=1, Water, OOB}

export function isSpotWater(spot:Spot):boolean{
    return spot.fieldType === Field.Water
}

export function isSpotEmpty(spot:Spot){
    return spot.digit === null
}

export function isSpider(spot:Spot){
    return spot.isSpider
}

export function isPiranha(spot:Spot){
    return spot.isPiranha
}

export function isAdjacent(spot1:Spot, spot2:Spot):boolean{
    return spot1.paths.some(s => s === spot2.index)
}

export function getAdjacentSpots(spot:Spot, forest:Spot[]):Spot[]{
    return forest.filter(s => spot.paths.includes(s.index))
}

export function isValidWriting(spot:Spot, forest:Spot[]):boolean{
    if(forest.every(isSpotEmpty)){
        return true
    } else {
        return getAdjacentSpots(spot, forest).some(s => !isSpotEmpty(s) || s.isSpider)
    }
}