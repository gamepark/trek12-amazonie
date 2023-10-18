import GameView from '../GameView'
import rollDice from '../material/Dice'
import MoveType from './MoveType'
import { GameState } from '../GameState'

type SetupNewRound = {
    type:MoveType.SetupNewRound
}

export default SetupNewRound

export type SetupNewRoundRandomized = SetupNewRound & {
    result: number[]
}

export const setupNewRoundMove:SetupNewRound = {type:MoveType.SetupNewRound}

export function setupNewRound(state:GameState|GameView, move:SetupNewRoundRandomized){
    state.players.forEach((p: any) => {
        p.isReady = false
        delete p.chooseBetweenPathways
        delete p.observationActualTurn
    })
    state.round++
    state.dice = move.result
}

export function randomizeSetupNewRound(move:SetupNewRound):SetupNewRoundRandomized{
    return {... move, result:rollDice()}
}