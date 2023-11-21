import { Material, MaterialGame, MaterialItem, MaterialRulesPart } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { PlayerId } from '../../Trek12Options'
import { LocationType } from '../../material/LocationType'

export class Node extends MaterialRulesPart {

  private nodeLocationIds: number[] = []
  private nodes: MaterialItem[] = []

  constructor(game: MaterialGame,
              readonly player: PlayerId,
              readonly nodeId: number) {
    super(game)
    //this.initializeNodes(this.getNodesWithPath(this.nodeId))
  }

  initializeNodes(nodeValues: MaterialItem[]) {
    /**if (!nodeValues.length) return
    this.nodeLocationIds.push(...nodeValues.map((item) => item.location.id))
    this.nodes.push(...nodeValues)
    nodeValues.forEach((nodeValue) => this.initializeNodes(this.getNodesWithPath(nodeValue)))*/
  }

  get isWritable() {
    if (this.isMapEmpty) return true
    return paths
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

  getNodesWithPath(node: MaterialItem): MaterialItem[] {
    const paths: number[] = this
      .material(MaterialType.Path)
      .player(this.player)
      .id((id: number[]) => id.includes(node.location.id))
      .getItems()
      .map((item) => {
        return item.id.filter((s: number) => s !== node.location.id && !this.nodeLocationIds.includes(s))
      })

    if (!paths.length) return []
    return this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .locationId((locationId: number) => paths.includes(locationId))
      .getItems()
  }





}

export const paths = [
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
  [6, 5],
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
