import { MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { SpecialValue } from '../material/Operator'
import { Area } from './helper/Area'
import { Pathway } from './helper/Pathway'

export class EndOfGameRule extends MaterialRulesPart {
  get isolatedNodes() {
    return this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .filter((item) => {
        if (item.id === SpecialValue.Spider) return false
        const pathWay = new Pathway(this.game, item.location.player!, item)
        const area = new Area(this.game, item.location.player!, item)
        return pathWay.nodeIds.length === 0 && area.nodeIds.length === 1
      })
      .getItems()
  }

  onRuleStart() {
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

    moves.push(this.rules().endGame())
    return moves
  }
}
