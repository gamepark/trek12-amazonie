type Spot = {
    digit:number|null
    fieldType:Field
    isPiranha?:true
    isSpider?:true
} & Coordinates

export default Spot

export enum Field {Forest=1, Water, OOB}

export type Coordinates = {
    x:number
    y:number
}

export function isSpotWater(spot:Spot):boolean{
    return spot.fieldType === Field.Water
}

export function isSpotEmpty(spot:Spot){
    return spot.digit === null
}

export function isAdjacent(spot1:Spot, spot2:Spot):boolean{
    if(spot1.x !== spot2.x) return Math.abs(spot1.x - spot2.x) === 1
    else if(spot1.y !== spot2.y) return Math.abs(spot1.y - spot2.y) === 2
    else throw new Error('error : its nonsense to check if a cell is adjacent to itself !')
}

export function getSpotWithCoords(coords:Coordinates, forest:Spot[]):Spot|undefined{
    return forest.find(s => s.x === coords.x && s.y === coords.y)
}

export function getAdjacentSpots(spot:Spot, forest:Spot[]):Spot[]{
    const spotCoords:Coordinates[]=[{x:spot.x-1, y:spot.y+1}, {x:spot.x-1, y:spot.y-1}, 
                                    {x:spot.x+1, y:spot.y+1}, {x:spot.x+1, y:spot.y-1},
                                    {x:spot.x, y:spot.y+2}, {x:spot.x, y:spot.y-2}]
    const result:Spot[] = []
    for (const s of spotCoords){
        const spot:Spot|undefined = getSpotWithCoords(s, forest)
        if (spot && spot.fieldType !== Field.OOB){
            result.push(spot)
        }
    }
    return result
}

export function isValidWriting(spot:Spot, forest:Spot[]):boolean{
    if(forest.every(isSpotEmpty)){
        return true
    } else {
        return getAdjacentSpots(spot, forest).some(s => !isSpotEmpty(s) || s.isSpider)
    }
}