import { MaterialGame, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { SpecialValue } from '../material/Operator'
import { PlayerId } from '../Trek12AmazonieOptions'
import { Area } from './helper/Area'
import { AreaScore } from './helper/AreaScore'
import { Pathway } from './helper/Pathway'
import { PathwayScore } from './helper/PathwayScore'

export class ScoringRule extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  get isolatedNodes() {
    return this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .filter((item) => {
        if (item.id === SpecialValue.Spider) return false
        const pathWay = new Pathway(this.game, this.player!, item)
        const area = new Area(this.game, this.player!, item)
        return pathWay.nodeIds.length === 0 && area.nodeIds.length === 1
      })
      .getItems()
  }

  get endOfPlayerTurnMoves(): MaterialMove[] {
    const moves: MaterialMove[] = []

    const isolatedNodes = this.isolatedNodes
    for (const item of isolatedNodes) {
      moves.push(
        this.material(MaterialType.Spider)
          .createItem({
            location: {
              id: item.location.id,
              type: LocationType.ExpeditionNode,
              player: item.location.player
            }
          })
      )
    }

    moves.push(...new PathwayScore(this.game, this.player).computePathwayScore)
    moves.push(...new AreaScore(this.game, this.player).computeAreaScore)
    return moves
  }
}
