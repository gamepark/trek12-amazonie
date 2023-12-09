import { Material, MaterialGame, MaterialItem, MaterialRulesPart } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { SpecialValue } from '../../material/Operator'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { LocationType } from '../../material/LocationType'
import equal from 'fast-deep-equal'

export class Node extends MaterialRulesPart {

  constructor(game: MaterialGame,
              readonly player: PlayerId,
              readonly nodeId: number) {
    super(game)
  }

  get isEmpty() {
    return !this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .locationId(this.nodeId)
      .player(this.player)
      .length
  }

  hasPathTo(nodeId: number) {
    return !!this
      .material(MaterialType.Path)
      .location(LocationType.Path)
      .player(this.player)
      .locationId((id: number[]) =>  equal(id, createPath(this.nodeId, nodeId)))
      .length
  }

  isAdjacentTo(nodeId: number) {
    const p = createPath(this.nodeId, nodeId)
    return mapGraph
      .some((path) => equal(path, p))
  }

  isValueNextTo(value: number | SpecialValue) {
    const node = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .locationId(this.nodeId)
      .player(this.player)
      .getItem()

    if (!node || SpecialValue.Spider === value) {
      return false
    }

    return value === (node.id + 1) || (value === (node.id - 1))
  }

  isValueEqualsTo(value: number | SpecialValue) {
    const node = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .locationId(this.nodeId)
      .player(this.player)
      .getItem()

    if (!node || SpecialValue.Spider === value) {
      return false
    }

    return value === (node.id)
  }

  get areaNode() {
    return this
      .material(MaterialType.AreaNode)
      .location(LocationType.ExpeditionNode)
      .locationId(this.nodeId)
      .player(this.player)
      .getItem()
  }

  get isWritable() {
    if (!this.isEmpty) return false
    if (this.isMapEmpty) return true
    return mapGraph
      .filter((path) => path.includes(this.nodeId))
      .some((path) => this.isWrittenNode(path.find((id) => id !== this.nodeId)!))

  }

  get isMapEmpty() {
    return !this
      .material(MaterialType.ExpeditionNodeValue)
      .player(this.player)
      .length
  }

  isWrittenNode(id: number) {
    return this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .locationId(id)
      .getItem()
      ?.id !== undefined
  }
}

export const createPath = (node1: number, node2: number) => [node1, node2].sort((a, b) => a - b)

export const mapGraph = [
  [0, 5],
  [0, 6],
  [0, 1],
  [1, 6],
  [1, 7],
  [1, 2],
  [2, 7],
  [2, 8],
  [2, 9],
  [2, 3],
  [3, 9],
  [3, 10],
  [3, 4],
  [4, 10],
  [4, 11],
  [5, 6],
  [5, 12],
  [5, 13],
  [6, 13],
  [6, 14],
  [6, 7],
  [7, 14],
  [7, 15],
  [7, 8],
  [8, 15],
  [8, 16],
  [8, 17],
  [8, 9],
  [9, 17],
  [9, 18],
  [9, 10],
  [10, 18],
  [10, 19],
  [10, 11],
  [11, 19],
  [12, 20],
  [12, 13],
  [13, 20],
  [13, 21],
  [13, 14],
  [14, 21],
  [14, 22],
  [14, 15],
  [15, 22],
  [15, 23],
  [15, 16],
  [16, 23],
  [16, 24],
  [16, 17],
  [17, 24],
  [17, 25],
  [17, 18],
  [18, 25],
  [18, 26],
  [18, 19],
  [19, 26],
  [20, 21],
  [21, 22],
  [22, 23],
  [24, 25],
  [25, 26],
]
