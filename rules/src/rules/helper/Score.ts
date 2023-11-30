import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import sum from 'lodash/sum'
import { ExplorationCardScores } from '../../material/ExplorationCard'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { SpecialValue } from '../../material/Operator'
import { PlayerId } from '../../Trek12Options'
import { Area } from './Area'
import { Pathway } from './Pathway'

export class Score extends MaterialRulesPart {

  constructor (game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  get total() {
    return this.observationScore + this.pathwayScore + this.areaScore - this.dangerScore
  }

  get dangerScore() {
    return this.dangerCount * 5
  }

  get dangerCount() {
    const spiderNodes = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .id((id: number | SpecialValue) => id === SpecialValue.Spider)
      .length

    const piranhas = this
      .material(MaterialType.Piranha)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .length

    const spider = this
      .material(MaterialType.Spider)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .length
    return spiderNodes + piranhas + spider
  }

  get observationScore() {
    const observations = this
      .material(MaterialType.ObservationCard)
      .location(LocationType.Observations)
      .getItems()

    const rings = this
      .material(MaterialType.ScoreRing)
      .location(LocationType.ObservationScores)
      .player(this.player)
      .getItems()

    console.log(observations)
    let score = 0
    for (const ring of rings) {
      const observation = observations.find((o) => o.location.x === ring.location.id)!
      score += ExplorationCardScores[observation.id][ring.location.x]
    }

    return score

  }

  get pathwayScoreList(): number[] {
    const nodesIds: number[] = []
    const values = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .getItems()

    const scores: number[] = []
    let x = 0;
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

  get areaScore(): number {
    return sum(this.areaScoreList)
  }

  get pathwayScore(): number {
    return sum(this.pathwayScoreList)
  }

  get areaScoreList(): number[] {
    const nodesIds: number[] = []
    const values = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .getItems()

    const scores: number[] = []
    let x = 0;
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
}
