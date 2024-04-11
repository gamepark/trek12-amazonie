import { isCreateItemType, ItemMove, MaterialGame, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import equal from 'fast-deep-equal'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { createPath, mapGraph } from '../helper/Node'
import { PathwayScore } from '../helper/PathwayScore'
import { Memory, Nodes, PlacedNode } from '../Memory'

export class ChoosePathNodeRule extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerId) {
    super(game)
  }

  get placedNode() {
    return this.remind<PlacedNode>(Memory.PlacedNode, this.player)
  }

  get chooseSuperiorNode() {
    return this.remind<Nodes>(Memory.ChooseSuperiorPathNode, this.player)
  }

  get chooseInferiorNode() {
    return this.remind<Nodes>(Memory.ChooseInferiorPathNode, this.player)
  }

  getLegalMoves() {
    const moves: MaterialMove[] = []

    const superiorNodes = this.chooseSuperiorNode
    if (superiorNodes) {
      moves.push(...this.choiceToMove(superiorNodes))
    }

    const inferiorNodes = this.chooseInferiorNode
    if (inferiorNodes) {
      moves.push(...this.choiceToMove(inferiorNodes))
    }

    return moves
  }

  afterItemMove(move: ItemMove) {
    if (!isCreateItemType(MaterialType.Path)(move)) return []

    const createdItem = move.item
    const target = createdItem.location.id.find((i: number) => i !== this.placedNode)!
    const targetValue = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .locationId(target)
      .getItem()!.id

    const placedValue = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .locationId(this.placedNode)
      .getItem()!.id

    if (placedValue > targetValue) {
      this.forget(Memory.ChooseInferiorPathNode, this.player)
    } else {
      this.forget(Memory.ChooseSuperiorPathNode, this.player)
    }

    const moves: MaterialMove[] = []
    if (!this.superiorPathNodes && !this.inferiorPathNodes) {
      this.forget(Memory.PlacedNode, this.player)
      moves.push(this.rules().endPlayerTurn(move.item.location.player!))
    }

    return moves
  }

  get superiorPathNodes() {
    return this.remind(Memory.ChooseSuperiorPathNode, this.player)
  }

  get inferiorPathNodes() {
    return this.remind(Memory.ChooseInferiorPathNode, this.player)
  }

  choiceToMove(nodes: Nodes) {
    return nodes.map((node) => this.material(MaterialType.Path).createItem({
      location: {
        id: mapGraph.find((path) => equal(path, createPath(node, this.placedNode)))!,
        type: LocationType.Path,
        player: this.player
      }
    }))
  }
}
