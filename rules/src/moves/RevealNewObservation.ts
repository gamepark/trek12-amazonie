import GameState, { Observation, ObservationView } from "../GameState";
import MoveType from "./MoveType";
import GameView from '../GameView';
import Animal, { observation1 } from "../material/Observation";
import { incrementObservation } from "./IncrementObservation";

type RevealNewObservation = {
    type:MoveType.RevealNewObservation,
    obsRevealed:Observation[]
}

export default RevealNewObservation

export function revealNewObservationMove(obsRevealed:Observation[]):RevealNewObservation{
    return {type:MoveType.RevealNewObservation, obsRevealed}
}

export function revealNewObservation(state:GameState, move:RevealNewObservation){
    move.obsRevealed.forEach(obs => {
        state.observation.find(hiddenObs => hiddenObs.discoveringValue === obs.discoveringValue && !hiddenObs.isRevealed)!.isRevealed = true
    })
    incrementObservation(state)
}

export function revealNewObservationView(state:GameView, move:RevealNewObservation){
    move.obsRevealed.forEach(obsRevealed => {
        state.observation[state.observation.findIndex(obs => obs.discoveringValue === obsRevealed.discoveringValue)] = 
        {isRevealed:true, discoveringValue:obsRevealed.discoveringValue, animal:obsRevealed.animal}
    })
    incrementObservation(state)
}



