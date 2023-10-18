import { MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
export class DiscoverRule extends SimultaneousRule {
  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    return []
  }
}