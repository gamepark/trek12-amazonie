import {IncompleteInformation, SimultaneousGame} from '@gamepark/rules-api'
import GameState, { setupNewGame } from './GameState'
import GameView from './GameView'
import Move from './moves/Move'
import MoveType from './moves/MoveType'
import MoveView from './moves/MoveView'
import {isGameOptions, Trek12Options} from './Trek12Options'


export default class Trek12 extends SimultaneousGame<GameState, Move, number>
  implements IncompleteInformation<GameState, GameView, Move, MoveView, number> {
  constructor(state: GameState)
  constructor(options: Trek12Options)
  constructor(arg: GameState | Trek12Options) {
    if (isGameOptions(arg)) {
      super(
        setupNewGame(arg)
      )
    } else {
      super(arg)
    }
  }

  isOver(): boolean {
    return this.state.round > 16
  }

  isTurnToPlay(playerId: number): boolean {
    return !this.state.players[playerId-1].isReady
  }

  getLegalMoves(): Move[] {
    return []
  }

  play(move: Move): void {

  }

  getAutomaticMove(): void | Move {
    return
  }

  getView(): GameView {
    return {...this.state,
            observation:this.state.observation.map(obs => 
              obs.isRevealed === true 
                ? obs 
                : {discoveringValue:obs.discoveringValue, isRevealed:obs.isRevealed})}
  }

  getMoveView(move: Move): MoveView {
    return move
  }

}