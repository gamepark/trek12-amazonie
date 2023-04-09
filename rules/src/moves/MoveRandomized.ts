import Move from './Move'
import SetupNewRound, { SetupNewRoundRandomized } from './SetupNewRound'


type MoveRandomized = Exclude<Move, SetupNewRound> | SetupNewRoundRandomized

export default MoveRandomized