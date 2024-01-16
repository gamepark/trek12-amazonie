import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import sumBy from 'lodash/sumBy'
import { ExplorationCardScores } from '../../material/ExplorationCard'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { SpecialValue } from '../../material/Operator'
import { PlayerId } from '../../Trek12AmazonieOptions'

export class Score extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerId) {
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

    let score = 0
    for (const ring of rings) {
      const observation = observations.find((o) => o.location.x === ring.location.id)!
      score += ExplorationCardScores[observation.id][ring.location.x]
    }

    return score

  }


  get areaScore(): number {
    console.time('Area Score' + this.player)
    const scores = this.material(MaterialType.AreaScore).player(this.player).getItems()
    const total = sumBy(scores, (item) => item.id)
    console.timeEnd('Area Score' + this.player)
    return total
  }

  get pathwayScore(): number {
    console.time('Path Score' + this.player)
    const scores = this.material(MaterialType.PathwayScore).player(this.player).getItems()
    const total = sumBy(scores, (item) => item.id)
    console.timeEnd('Path Score' + this.player)
    return total
  }
}
