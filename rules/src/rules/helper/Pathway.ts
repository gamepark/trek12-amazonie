import { MaterialGame, MaterialItem, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import equal from 'fast-deep-equal'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerId } from '../../Trek12Options'
import { Memory } from '../Memory'
import { createPath, mapGraph, Node } from './Node'

export class Pathway extends MaterialRulesPart {
  private pathNodes: MaterialItem[] = []
  private pathNodesLocationIds: number[] = []

  constructor(game: MaterialGame,
              readonly player: PlayerId,
              readonly nodeItem: MaterialItem) {
    super(game)
    this.getAdjacentNodes(this.nodeItem)
  }

  hasAlreadyValue(value: number) {
    return this.pathNodes.some((p) => p.id === value)
  }

  getAdjacentNodes(item: MaterialItem): MaterialItem[] {
    const locationId = item.location.id
    const node = new Node(this.game, this.player, locationId)
    const adjacent = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .filter((i) => locationId !== i.location.id
        && node.hasPathTo(i.location.id)
        && !this.isNodeAlreadyPresent(i)
      )
      .getItems()


    if (!adjacent.length) return [item]
    this.pathNodes.push(...adjacent)
    return adjacent
      .flatMap((a) => this.getAdjacentNodes(a))
  }
  get createPathwayMoves() {
    const adjacentNodes = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .filter((item) => {
        const node = new Node(this.game, this.player, item.location.id)
        return node.isAdjacentTo(this.nodeItem.location.id)
          && node.isValueNextTo(this.nodeItem.id)
          && !new Pathway(this.game, this.player, item).hasAlreadyValue(this.nodeItem.id)
      })
      .getItems()

    if (!adjacentNodes.length) return []


    const superiorNodes = adjacentNodes.filter((item) => item.id > this.nodeItem.id)
    const inferiorNodes = adjacentNodes.filter((item) => item.id < this.nodeItem.id)

    const moves: MaterialMove[] = []
    moves.push(...this.createPathToNodes(superiorNodes, Memory.ChooseSuperiorPathNode))
    moves.push(...this.createPathToNodes(inferiorNodes, Memory.ChooseInferiorPathNode))

    return moves
  }

  createPathToNodes(nodes: MaterialItem[], memoryKey: Memory) {
    if (nodes.length > 1) {
      this.memorize(Memory.PlacedNode, this.nodeItem.location.id, this.player)
      this.memorize(memoryKey, nodes.map((n) => n.location.id), this.player)
      return []
    } else {
      return nodes.map((item) => this.material(MaterialType.Path).createItem({
        location: {
          id: mapGraph.find((path) => equal(path, createPath(item.location.id, this.nodeItem.location.id)))!,
          type: LocationType.Path,
          player: this.player
        }
      }))
    }
  }

  isNodeAlreadyPresent(item: MaterialItem) {
    return this.pathNodes.some((node) => node.location.id === item.location.id)
  }
}
