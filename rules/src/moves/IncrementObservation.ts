import MoveType from './MoveType'
import { GameState } from '../GameState'

type IncrementObservation = {
    type:MoveType.IncrementObservation,
}

export default IncrementObservation

export const incrementObservationMove:IncrementObservation = {type:MoveType.IncrementObservation}

export function incrementObservation(state:GameState){
    state.players.forEach((p: any) => {
        p.observationsMade.find((obs: any) => obs.discoveringValue === p.observationActualTurn)!.discoveringCount++
        delete p.observationActualTurn
    })
}