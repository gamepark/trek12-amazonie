import { MaterialGame, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { Pathway } from './Pathway'

export class PathwayScore extends MaterialRulesPart {


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
      const pathway = new Pathway(this.game, this.player, valueNode)
      nodesIds.push(...pathway.nodeIds)
      const score = pathway.score
      if (!score) continue
      scores.push(score)
    }

    return scores

  }

  get computePathwayScore(): MaterialMove[] {
    const player = this.player
    return this.material(MaterialType.PathwayScore)
      .createItems(
        this.scores.map((score) => ({
          id: score,
          location: {
            type: LocationType.PathwayScore,
            player
          }
        }))
      )
  }
}