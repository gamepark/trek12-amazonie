import GameState from "../GameState";
import GameView from "../GameView";
import rollDice from "../material/Dice";
import { getPlayerName } from "../Trek12Options";
import Move from "./Move";
import MoveType from "./MoveType";

type SetupNewRound = {
    type:MoveType.SetupNewRound
}

export default SetupNewRound

export const setupNewRoundMove:SetupNewRound = {type:MoveType.SetupNewRound}

export function setupNewRound(state:GameState|GameView){
    state.players.forEach(p => {
        p.isReady = false
        delete p.chooseBetweenPathways
        delete p.observationActualTurn
    })
    state.round++
    state.dice = rollDice()
}