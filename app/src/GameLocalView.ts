import GameView from "@gamepark/trek12/GameView"
import { Operand } from "@gamepark/trek12/PlayerState"

type GameLocalView = GameView & {
    selectedOperand?: Operand
    selectedSpot?:number
  }
  
  
  export default GameLocalView
  