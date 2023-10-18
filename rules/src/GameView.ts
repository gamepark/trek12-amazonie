import { GameState } from './GameState'

type GameView = Omit<GameState, 'observation'> & {
}

export default GameView