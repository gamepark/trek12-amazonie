import { MaterialContext } from '@gamepark/react-game'
import { MaterialGame, MaterialItem, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerId } from '../../Trek12Options'
import { Area } from './Area'
import { Pathway } from './Pathway'

export class Score extends MaterialRulesPart {

  constructor (game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  get pathwayScoreList() {
    const nodesIds: number[] = []
    const values = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .getItems()

    const items: MaterialItem[] = []
    let x = 0;
    for (const valueNode of values) {
      if (nodesIds.includes(valueNode.location.id)) continue
      const pathway = new Pathway(this.game, this.player, valueNode)
      nodesIds.push(...pathway.nodeIds)
      if (!pathway.score) continue
      items.push({
        id: pathway.score,
        location: {
          type: LocationType.PathwayScore,
          player: this.player,
          x: x++,
        }
      })
    }

    return items

  }

  get areaScoreList() {
    const nodesIds: number[] = []
    const values = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .getItems()

    const items: MaterialItem[] = []
    let x = 0;
    for (const valueNode of values) {
      if (nodesIds.includes(valueNode.location.id)) continue
      const area = new Area(this.game, this.player, valueNode)
      nodesIds.push(...area.nodeIds)
      if (!area.score) continue
      items.push({
        id: area.score,
        location: {
          type: LocationType.AreaScore,
          player: this.player,
          x: x++,
        }
      })
    }

    return items
  }
}
