import GameState, { Observation } from "../GameState";
import GameView from "../GameView";
import MoveType from "./MoveType";

type IncrementObservation = {
    type:MoveType.IncrementObservation,
}

export default IncrementObservation

export const incrementObservationMove:IncrementObservation = {type:MoveType.IncrementObservation}

export function incrementObservation(state:GameView|GameState){
    state.players.forEach(p => {
        p.observationsMade.find(obs => obs.discoveringValue === p.observationActualTurn)!.discoveringCount++
        delete p.observationActualTurn
    })
}