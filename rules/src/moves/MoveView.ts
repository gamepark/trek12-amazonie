import Move from './Move'
import MoveType from './MoveType'
import SetupNewRound, { SetupNewRoundRandomized } from './SetupNewRound'

type MoveView = Exclude<Move, SetupNewRound> |SetupNewRoundRandomized

export function isMoveView(move : Move):move is Move & MoveView{
    return move.type !== MoveType.SetupNewRound && move.type !== MoveType.RevealNewObservation
}

export default MoveView