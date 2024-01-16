import { MaterialItem, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { SpecialValue } from '../material/Operator'
import { RuleId } from './RuleId'

export class DiscoverRule extends MaterialRulesPart {
  get revealObservationCard() {
    const numberedCards = this.material(MaterialType.NumberCard).getItems()
    const moves: MaterialMove[] = []
    for (const numberedCard of numberedCards) {
      const nodeWithValue = this
        .material(MaterialType.ExpeditionNodeValue)
        .location(LocationType.ExpeditionNode)
        .filter((item) => item.id !== SpecialValue.Spider)
        .id((id: number) => (id + 1) === numberedCard.id)

      if (nodeWithValue.length) {
        const observationCard = this
          .material(MaterialType.ObservationCard)
          .location((location) => location.x === numberedCard.location.x)

        const observation = observationCard.getItem()!
        if (observation.location.rotation) {
          moves.push(observationCard.rotateItem(false))
          moves.push(...this.addOrMoveScoreRing(observation, numberedCard))
        }
      }
    }

    return moves
  }

  onRuleStart() {
    const moves = this.revealObservationCard
    moves.push(this.rules().startRule(RuleId.RollDice))
    return moves
  }

  addOrMoveScoreRing(observation: MaterialItem, numberedCard: MaterialItem): MaterialMove[] {
    const moves: MaterialMove[] = []
    for (const player of this.game.players) {
      const nodeValue = this
        .material(MaterialType.ExpeditionNodeValue)
        .location(LocationType.ExpeditionNode)
        .player(player)
        .filter((item) => item.id !== SpecialValue.Spider)
        .id((id: number) => (id + 1) === numberedCard.id)

      if (!nodeValue.length) continue
      const ring = this
        .material(MaterialType.ScoreRing)
        .location(LocationType.ObservationScores)
        .locationId(observation.location.x)
        .player(player)

      if (ring.length) continue

      moves.push(
        this
          .material(MaterialType.ScoreRing)
          .createItem({
            location: {
              id: observation.location.x,
              type: LocationType.ObservationScores,
              x: 0,
              player: player
            }
          })
      )


    }
    return moves
  }
}
