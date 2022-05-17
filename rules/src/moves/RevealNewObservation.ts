import GameState, { Observation, ObservationView } from "../GameState";
import MoveType from "./MoveType";
import GameView from '../GameView';

type RevealNewObservation = {
    type:MoveType.RevealNewObservation,
    obsRevealed:Observation[]
}

type RevealNewObservationViw = Omit<RevealNewObservation, 'obsRevealed'> & {
    obsRevealedView:(Observation | ObservationView)[]
}

export default RevealNewObservation

export function revealNewObservationMove(obsRevealed:Observation[]){
    return {type:MoveType.RevealNewObservation, obsRevealed}
}

export function revealNewObservation(state:GameState, move:RevealNewObservation){
    move.obsRevealed.forEach(obs => {
        state.observation.find(hiddenObs => hiddenObs.discoveringValue === obs.discoveringValue && !hiddenObs.isRevealed)!.isRevealed = true
    })
    state.players.forEach(p => {
        p.observationsMade.find(obs => obs.discoveringValue === p.observationActualTurn)!.discoveringCount++
        delete p.observationActualTurn
    })

    //TO VERIF
}

export function revealNewObservationView(state:GameView, move:RevealNewObservationViw){
    state.observation = move.obsRevealedView

    //TODO

}

