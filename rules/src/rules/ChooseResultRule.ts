import { MaterialMove, SimultaneousRule } from '@gamepark/rules-api'

export class ChooseResultRule extends SimultaneousRule {
  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    return []
  }

}