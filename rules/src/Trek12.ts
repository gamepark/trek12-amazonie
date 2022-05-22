import {IncompleteInformation, SimultaneousGame} from '@gamepark/rules-api'
import GameState, { ObservationView, setupNewGame } from './GameState'
import GameView from './GameView'
import Spot, { isAdjacent, isSpider, isSpotEmpty } from './material/Spot'
import { incrementObservation } from './moves/IncrementObservation'
import Move from './moves/Move'
import MoveType from './moves/MoveType'
import MoveView from './moves/MoveView'
import { revealNewObservation } from './moves/RevealNewObservation'
import { setupNewRound, setupNewRoundMove } from './moves/SetupNewRound'
import { writeNumber, writeNumberMove } from './moves/WriteNumber'
import PlayerState, { Operand } from './PlayerState'
import {isGameOptions, Trek12Options} from './Trek12Options'


export default class Trek12 extends SimultaneousGame<GameState, Move, number>
  implements IncompleteInformation<GameState, GameView, Move, MoveView, number> {
  constructor(state: GameState)
  constructor(options: Trek12Options)
  constructor(arg: GameState | Trek12Options) {
    if (isGameOptions(arg)) {
      super(
        setupNewGame(arg.forestType, arg.players, arg.observationMix)
      )
    } else {
      super(arg)
    }
  }

  isOver(): boolean {
    return this.state.round > 20
  }

  isTurnToPlay(playerId: number): boolean {
    return !this.state.players[playerId-1].isReady
  }

  getLegalMoves(playerId:number): Move[] {
    const moves:Move[] = []
    const player:PlayerState = this.state.players[playerId-1]
    if(!player.isReady){
      if(player.forest.every(spot => spot.digit === null)){
        player.forest.forEach(spot => {
            moves.push(writeNumberMove(Operand.add, spot.index, playerId))
            moves.push(writeNumberMove(Operand.high, spot.index, playerId))
            moves.push(writeNumberMove(Operand.minus, spot.index, playerId))
            moves.push(writeNumberMove(Operand.small, spot.index, playerId))
            moves.push(writeNumberMove(Operand.time, spot.index, playerId))          
        })
      } else {
        const spotsAlreadyWrote:Spot[] = player.forest.filter(s => !isSpotEmpty(s) || s.isSpider)
        const legalSpots:Spot[] = player.forest.filter(emptySpot => spotsAlreadyWrote.some(wroteSpot => isAdjacent(emptySpot, wroteSpot) && (isSpotEmpty(emptySpot) && !isSpider(emptySpot))))
        legalSpots.forEach(spot => {
          moves.push(writeNumberMove(Operand.add, spot.index, playerId))
          moves.push(writeNumberMove(Operand.high, spot.index, playerId))
          moves.push(writeNumberMove(Operand.minus, spot.index, playerId))
          moves.push(writeNumberMove(Operand.small, spot.index, playerId))
          moves.push(writeNumberMove(Operand.time, spot.index, playerId))
        })
      }
    }

    return moves
  }

  play(move: Move): void {
    switch(move.type){
      case MoveType.WriteNumber:
        return writeNumber(this.state, move)
      case MoveType.SetupNewRound:
        return setupNewRound(this.state)
      case MoveType.RevealNewObservation:
        return revealNewObservation(this.state, move)
      case MoveType.IncrementObservation:
        return incrementObservation(this.state)
    }
  }

  getAutomaticMove(): void | Move {
    if(this.state.players.every(p => p.isReady)){
      if (this.state.players.some(p => p.observationActualTurn)){
        // TODO : reveal and add obs move
      } else {
        return setupNewRoundMove
      }
    }
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
    if(move.type === MoveType.RevealNewObservation){
      const obsRevealed:ObservationView[] = this.state.observation.filter(obs => this.state.players.some(p => p.observationActualTurn === obs.discoveringValue))
            .map((obs, index) => {return{discoveringValue:obs.discoveringValue, isRevealed:obs.isRevealed}})
      const animals:number[] = this.state.observation.filter(obs => this.state.players.some(p => p.observationActualTurn === obs.discoveringValue))
            .map((obs, index) => {return obs.animal})
      return {
        type:MoveType.RevealNewObservation,
        obsRevealed:this.state.observation.filter(obs => this.state.players.some(p => p.observationActualTurn === obs.discoveringValue))
      }
    } else return move
  }

}