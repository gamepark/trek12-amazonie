import GameView from '@gamepark/trek12/GameView'
import MoveType from '@gamepark/trek12/moves/MoveType'
import MoveView from '@gamepark/trek12/moves/MoveView'
import {Game} from '@gamepark/rules-api'
import { writeNumber } from '@gamepark/trek12/moves/WriteNumber'
import { setupNewRound } from '@gamepark/trek12/moves/SetupNewRound'

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
    }
  }

}