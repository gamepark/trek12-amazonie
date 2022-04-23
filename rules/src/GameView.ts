import GameState, { Observation, ObservationView } from './GameState'

type GameView = Omit<GameState, 'observation'> & {
  observation: (ObservationView|Observation)[]
}

export default GameView