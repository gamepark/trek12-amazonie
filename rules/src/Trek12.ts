import {IncompleteInformation, RandomMove, Rules} from '@gamepark/rules-api'
import GameState, { isNotObservationView, isObservationView, Observation, setupNewGame } from './GameState'
import GameView from './GameView'
import Spot, { isAdjacent, isSpider, isSpotEmpty } from './material/Spot'
import { endGame, EndGameMove } from './moves/EndGame'
import { incrementObservation, incrementObservationMove } from './moves/IncrementObservation'
import Move from './moves/Move'
import MoveRandomized from './moves/MoveRandomized'
import MoveType from './moves/MoveType'
import MoveView from './moves/MoveView'
import { revealNewObservation, revealNewObservationMove } from './moves/RevealNewObservation'
import { randomizeSetupNewRound, setupNewRound, setupNewRoundMove } from './moves/SetupNewRound'
import { writeNumber, writeNumberMove } from './moves/WriteNumber'
import PlayerState, { Operand } from './PlayerState'
import {isGameOptions, Trek12Options} from './Trek12Options'


export default class Trek12 extends Rules<GameState | GameView, Move | MoveView, number>
  implements IncompleteInformation<GameView, Move, MoveView>,
  RandomMove<Move, MoveRandomized> {
  constructor(state: GameState | GameView)
  constructor(options: Trek12Options)
  constructor(arg: GameState | GameView | Trek12Options) {
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
            moves.push(writeNumberMove(Operand.add, playerId, spot.index))
            moves.push(writeNumberMove(Operand.high, playerId, spot.index))
            moves.push(writeNumberMove(Operand.minus, playerId, spot.index))
            moves.push(writeNumberMove(Operand.small, playerId, spot.index))
            moves.push(writeNumberMove(Operand.time, playerId, spot.index))          
        })
      } else {
        const spotsAlreadyWrote:Spot[] = player.forest.filter(s => !isSpotEmpty(s) || s.isSpider)
        const legalSpots:Spot[] = player.forest.filter(emptySpot => spotsAlreadyWrote.some(wroteSpot => isAdjacent(emptySpot, wroteSpot) && (isSpotEmpty(emptySpot) && !isSpider(emptySpot))))
        legalSpots.forEach(spot => {
          moves.push(writeNumberMove(Operand.add, playerId, spot.index))
          moves.push(writeNumberMove(Operand.high, playerId, spot.index))
          moves.push(writeNumberMove(Operand.minus, playerId, spot.index))
          moves.push(writeNumberMove(Operand.small, playerId, spot.index))
          moves.push(writeNumberMove(Operand.time, playerId, spot.index))
        })
      }
    }

    return moves
  }

  play(move: MoveRandomized): void {
    if (this.automaticMoves.length > 0 && this.automaticMoves[0].type === move.type){
      this.automaticMoves.unshift()
    }
    switch(move.type){
      case MoveType.WriteNumber:
        writeNumber(this.state, move)
        //this.automaticMoves.push(incrementObservationMove)
        break;
      case MoveType.SetupNewRound:
        return setupNewRound(this.state, move)
      case MoveType.RevealNewObservation:
        return revealNewObservation(this.state as GameState, move)
      case MoveType.IncrementObservation:
        return incrementObservation(this.state)
      case MoveType.EndGame:
        return endGame(this.state)
    }
  }

  getAutomaticMoves(): Move[] {
    if(this.state.players.every(p => p.isReady)){
      if (this.state.players.some(p => p.observationActualTurn)){
        if (this.state.observation.filter(obs => this.state.players.some(p => p.observationActualTurn === obs.discoveringValue)).some(obs => obs.isRevealed === false) ){
          return [revealNewObservationMove(this.state.observation.filter(obs => this.state.players.some(p => p.observationActualTurn === obs.discoveringValue)).filter(obs => obs.isRevealed === false) as Observation[] )] 
        } else {
          return [incrementObservationMove]
        }
      } else {
        if(this.state.round === 20){
          return [EndGameMove]
        }
        return [setupNewRoundMove]
      }
    }
    return this.automaticMoves
  }

  randomize(move: Move): Move & MoveRandomized {
    switch (move.type) {
      case MoveType.SetupNewRound:
        return randomizeSetupNewRound(move)
      default:
        return move
    }
  }

  getView(): GameView {
    return {...this.state,
            observation:this.state.observation.map(obs => 
              obs.isRevealed === true 
                ? obs 
                : {discoveringValue:obs.discoveringValue, isRevealed:obs.isRevealed})}
  }

  getMoveView(move: MoveRandomized): MoveView {
    if(move.type === MoveType.RevealNewObservation){
      return {
        type:MoveType.RevealNewObservation,
        obsRevealed:this.state.observation.filter(obs => this.state.players.some(p => p.observationActualTurn === obs.discoveringValue)) as Observation[]
      }
    } else return move
  }

}