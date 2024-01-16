import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { Area } from './Area'

export class AreaScore extends MaterialRulesPart {


  constructor(game: MaterialGame,
              readonly player: PlayerId) {
    super(game)
  }

  get scores(): number[] {
    const nodesIds: number[] = []
    const values = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .getItems()

    const scores: number[] = []
    let x = 0
    for (const valueNode of values) {
      if (nodesIds.includes(valueNode.location.id)) continue
      const area = new Area(this.game, this.player, valueNode)
      nodesIds.push(...area.nodeIds)
      const score = area.score
      if (!score) continue
      scores.push(area.score)
    }

    return scores
  }

  get refreshMoves() {
    const player = this.player
    return [
      this.material(MaterialType.AreaScore)
        .player(player)
        .deleteItemsAtOnce(),
      this.material(MaterialType.AreaScore)
        .player(player)
        .createItemsAtOnce(this.scores.map((score) => ({
          id: score,
          location: {
            type: LocationType.AreaScore,
            player
          }
        })))
    ]
  }
}