import GameState, { isNotObservationView } from "../GameState";
import GameView from "../GameView";
import MoveType from "./MoveType";
import Animal, {ObservationMix, getObservationMix} from "../material/Observation"
import { getAdjacentSpots, PathwaySpot } from "../material/Spot";

type EndGame = {
    type:MoveType.EndGame
}

export default EndGame

export const EndGameMove:EndGame = {type:MoveType.EndGame}

export function endGame(state:GameState|GameView){
    state.players.forEach(p => {
        state.observation.forEach(obs => {
            if(isNotObservationView(obs)){
                // TODO : find a way to get the good obsMix, with the good option !
                const animalArray:Animal = getObservationMix(ObservationMix.BasicPlantsAndGooies)[obs.animal]
                p.score.obsScore += animalArray.scoring[p.observationsMade.find(obsMade => obsMade.discoveringValue === obs.discoveringValue)!.discoveringCount]
            }
        })
        const groupSpotsArray:PathwaySpot[][] = []
        p.forest.forEach(spot => {
            if (spot !== null){
                const howManyGroups:PathwaySpot[][] = groupSpotsArray.filter(group => group.some(gs => getAdjacentSpots(spot, p.forest).some(adjSpot => adjSpot.index === gs.index) && gs.digit === spot.digit));
                if (howManyGroups.length === 1){
                    groupSpotsArray.find(group => group.some(s1 => howManyGroups[0].some(s2 => s1.index === s2.index)))!.push({index:spot.index, digit:spot.digit!})
                } else if (howManyGroups.length > 1){
                    // TODO : HAVE TO FUSE GROUPS TOGETHER
                } else {
                    groupSpotsArray.push([{index:spot.index, digit:spot.digit!}])
                }
            }
        })
    })
}