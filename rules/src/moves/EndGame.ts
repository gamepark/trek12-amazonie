import MoveType from './MoveType'

type EndGame = {
    type:MoveType.EndGame
}

export default EndGame

export const EndGameMove:EndGame = {type:MoveType.EndGame}
    //
    // export function endGame(state:GameState){
    //
    //     state.players.forEach(p => {
    //
    //         // Score Observation
    //         state.observation.forEach(obs => {
    //             if(isNotObservationView(obs)){
    //                 // TODO : find a way to get the good obsMix, with the good option !
    //                 const animalArray:Animal = getObservationMix(ObservationMix.BasicPlantsAndGooies)[obs.animal]
    //                 p.score.obsScore += animalArray.scoring[p.observationsMade.find(obsMade => obsMade.discoveringValue === obs.discoveringValue)!.discoveringCount]
    //             }
    //         })
    //
    //         // Score Groups
    //         const groupSpotsArray:PathwaySpot[][] = []
    //         p.forest.forEach(spot => {
    //             if (spot !== null){
    //                 const howManyGroups:PathwaySpot[][] = groupSpotsArray.filter(group => group.some(gs => getAdjacentSpots(spot, p.forest).some(adjSpot => adjSpot.index === gs.index) && gs.digit === spot.digit));
    //                 if (howManyGroups.length === 1){
    //                     groupSpotsArray.find(group => group.some(s1 => howManyGroups[0].some(s2 => s1.index === s2.index)))!.push({index:spot.index, digit:spot.digit!})
    //                 } else if (howManyGroups.length > 1){
    //                     const outputGroup: PathwaySpot[] = []
    //                     for (const group of howManyGroups){
    //                         outputGroup.push(...group)
    //                         groupSpotsArray.splice(groupSpotsArray.findIndex(groupGSA => groupGSA.some(s1 => group.some(s2 => s1.index === s2.index)))!,1)
    //                     }
    //                     groupSpotsArray.find(group => group.some(s1 => howManyGroups[0].some(s2 => s1.index === s2.index)))!.push({index:spot.index, digit:spot.digit!})
    //
    //                 } else {
    //                     groupSpotsArray.push([{index:spot.index, digit:spot.digit!}])
    //                 }
    //             }
    //         })
    //
    //         // Set Spider in each spot which is not in a group or a path
    //         p.forest.forEach(spot => {
    //             if (groupSpotsArray.filter(gs => gs.find(s => s.index === spot.index) && gs.length === 1).length !== 0 || p.pathways.filter(ps => ps.find(s => s.index === spot.index)  && ps.length === 1).length !== 0){
    //                 spot.isSpider = true
    //             }
    //         })
    //
    //         groupSpotsArray.filter(group => group.length > 1).forEach(group => {
    //             p.score.groupScore += group[0].digit + group.length - 1
    //         })
    //
    //         // Score Pathways
    //         p.pathways.filter(path => path.length > 1).forEach(path => {
    //             p.score.pathwayScore += path[0].digit + path.length - 1
    //         })
    //
    //         // Score hazards
    //         p.forest.filter(spot => isPiranha(spot) || isSpider(spot)).forEach(spot => {
    //             p.score.hazardScore -= isPiranha(spot) ? 5 : 0
    //             p.score.hazardScore -= isSpider(spot) ? 5 : 0
    //         })
    //
    //         //End the game
    //         state.round++
    //
    //     })
    // }