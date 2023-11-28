import {  MaterialItem, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { SpecialValue } from '../material/Operator'
export class DiscoverRule extends MaterialRulesPart {
  onRuleStart() {
    const moves = this.revealObservationCard
    moves.push(this.rules().startRule(RuleId.RollDice))
    return moves
  }

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
        }

        moves.push(...this.addOrMoveScoreRing(observation, numberedCard))
      }
    }
    
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

      if (nodeValue.length) {
        const ring = this
            .material(MaterialType.ScoreRing)
            .location(LocationType.ObservationScores)
            .locationId(observation.location.x)
            .player(player)
      
          if (!ring.length) {
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
          } else {
            const item = ring.getItem()!
            if (item.location.x! < 5) {
              moves.push(ring.moveItem({
                id: observation.location.x,
                type: LocationType.ObservationScores,
                x: item.location.x! + 1,
                player: player
              }))
            }
          }
      }

      
    }

    return moves
  }
  
}