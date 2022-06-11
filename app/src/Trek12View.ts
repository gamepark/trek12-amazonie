import GameView from '@gamepark/trek12/GameView'
import MoveType from '@gamepark/trek12/moves/MoveType'
import MoveView from '@gamepark/trek12/moves/MoveView'
import {Game} from '@gamepark/rules-api'
import { writeNumber } from '@gamepark/trek12/moves/WriteNumber'
import { setupNewRound } from '@gamepark/trek12/moves/SetupNewRound'
import { revealNewObservationView } from '@gamepark/trek12/moves/RevealNewObservation'
import { incrementObservation } from '@gamepark/trek12/moves/IncrementObservation'
import { endGame } from '@gamepark/trek12/moves/EndGame'

export default class Trek12View implements Game<GameView, MoveView> {
  state: GameView

  constructor(state: GameView) {
    this.state = state
  }

  getAutomaticMove(): void | MoveView {
    return
  }

  play(move: MoveView): void {
    switch(move.type){
      case MoveType.WriteNumber:
        return writeNumber(this.state, move)
      case MoveType.SetupNewRound:
        return setupNewRound(this.state)
      case MoveType.RevealNewObservation:
        return revealNewObservationView(this.state, move)
      case MoveType.IncrementObservation:
        return incrementObservation(this.state)
      case MoveType.EndGame:
        return endGame(this.state)
    }
  }

}