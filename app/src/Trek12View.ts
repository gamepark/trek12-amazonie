export class Trek12View {}
// import Move from '@gamepark/trek12/moves/Move'
// import MoveRandomized from '@gamepark/trek12/moves/MoveRandomized'
// import MoveType from '@gamepark/trek12/moves/MoveType'
// import MoveView, { isMoveView } from '@gamepark/trek12/moves/MoveView'
// import { revealNewObservationView } from '@gamepark/trek12/moves/RevealNewObservation'
// import Trek12 from '@gamepark/trek12/Trek12'
// import SetSelectedOperand, { resetSelectedOperand, ResetSelectedOperand, RESET_SELECTED_OPERAND, setSelectedOperand, SET_SELECTED_OPERAND } from './localMoves/setSelectedOperand'
// import SetSelectedSpot, { resetSelectedSpot, ResetSelectedSpot, RESET_SELECTED_SPOT, setSelectedSpot, SET_SELECTED_SPOT } from './localMoves/setSelectedSpot'
//
// type LocalMove = MoveView | SetSelectedOperand | ResetSelectedOperand | SetSelectedSpot | ResetSelectedSpot
//
// export default class Trek12View extends Trek12 {
//
//   getAutomaticMoves(): (Move & MoveView)[] {
//     const moves = super.getAutomaticMoves()
//     return moves.filter(isMoveView)
//   }
//
//   play(move: MoveRandomized): void {
//     const localMove = move as LocalMove
//     switch(localMove.type){
//       case MoveType.RevealNewObservation:
//         return revealNewObservationView(this.state, localMove)
//       case SET_SELECTED_OPERAND:
//         return setSelectedOperand(this.state, localMove)
//       case RESET_SELECTED_OPERAND:
//         return resetSelectedOperand(this.state)
//       case SET_SELECTED_SPOT:
//         return setSelectedSpot(this.state, localMove)
//       case RESET_SELECTED_SPOT:
//         return resetSelectedSpot(this.state)
//       default:
//         super.play(localMove)
//     }
//   }
//
// }