import { MaterialGame, MaterialItem, MaterialRulesPart } from '@gamepark/rules-api'
import uniqBy from 'lodash/uniqBy'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { SpecialValue } from '../../material/Operator'
import { PlayerId } from '../../Trek12AmazonieOptions'
import { Node } from './Node'

export class Area extends MaterialRulesPart {
  private nodeId: number
  private nodes: MaterialItem[]

  constructor(game: MaterialGame,
              readonly player: PlayerId,
              readonly nodeValue: MaterialItem) {
    super(game)

    this.nodeId = nodeValue.location.id
    this.nodes = [nodeValue]
    this.getAdjacentNodes(nodeValue)
  }

  get nodeIds() {
    return this.nodes.map((node) => node.location.id)
  }

  get score() {
    if (this.nodes.length === 1 || this.nodeValue.id === SpecialValue.Spider) return 0

    return this.nodeValue.id + (this.nodes.length - 1)
  }

  get addAreaNodeMoves() {
    const adjacentNodes = this.nodes.filter((node) => node.location.id !== this.nodeId)

    if (!adjacentNodes.length) return []
    if (adjacentNodes.length > 1) {
      const uniqAreaNodes = uniqBy(
        adjacentNodes,
        (node) => this
          .material(MaterialType.AreaNode)
          .location(LocationType.ExpeditionNode)
          .locationId(node.location.id)
          .player(node.location.player)
          .getItem()?.id
      )
      if (uniqAreaNodes.length > 1) {
        return this.mergeAreaNodes(adjacentNodes)
      }
    }
    return this.addUniqAreaNodes(adjacentNodes)
  }

  getAdjacentNodes(item: MaterialItem): MaterialItem[] {
    const adjacentNodes = this
      .material(MaterialType.ExpeditionNodeValue)
      .location(LocationType.ExpeditionNode)
      .player(this.player)
      .filter((nodeValue) => {
        if (this.nodes.some((item) => item.location.id === nodeValue.location.id)) return false
        const node = new Node(this.game, this.player, nodeValue.location.id)
        return node.isAdjacentTo(item.location.id)
          && node.isValueEqualsTo(this.nodeValue.id)
      })
      .getItems()

    if (!adjacentNodes.length && item.location.id === this.nodeId) return []
    if (!adjacentNodes.length) return [item]
    this.nodes.push(...adjacentNodes)
    return adjacentNodes.flatMap((node) => this.getAdjacentNodes(node))
  }


  mergeAreaNodes(adjacentNodes: MaterialItem[]) {
    const deletion = adjacentNodes.flatMap((item) =>
      this.material(MaterialType.AreaNode)
        .location(LocationType.ExpeditionNode)
        .locationId(item.location.id)
        .player(this.player)
        .deleteItems()
    )

    const color = this.availableColors[0]
    const addition = this.material(MaterialType.AreaNode)
      .createItems(adjacentNodes.map((item) => ({
          id: color,
          location: item.location
        }))
      )

    const newNode = this.material(MaterialType.AreaNode)
      .createItem({
        id: color,
        location: { ...this.nodeValue.location }
      })
    return [
      newNode,
      ...deletion,
      ...addition
    ]
  }

  addUniqAreaNodes(adjacentNodes: MaterialItem[]) {
    const node = new Node(this.game, this.player, adjacentNodes[0].location.id)
    if (!node.areaNode) {
      const randomColor = this.availableColors[0]
      const materialToReturn = []
      adjacentNodes.forEach(node => materialToReturn.push(this.material(MaterialType.AreaNode).createItem({ id: randomColor, location: { ...node.location } })))
      materialToReturn.push(this.material(MaterialType.AreaNode).createItem({ id: randomColor, location: { ...this.nodeValue.location } }))
      return materialToReturn

    } else {
      return [
        this.material(MaterialType.AreaNode)
          .createItem({
            id: node.areaNode.id,
            location: { ...this.nodeValue.location }
          })
      ]
    }
  }

  get availableColors() {
    return colors.filter((c) => !this.material(MaterialType.AreaNode).player(this.player).id(c).length)
  }
}

const colors = [
  "#d00e86",
  "#d2c925",
  "#61db53",
  "#0a50fe",
  "#d3f0c9",
  "#10693e",
  "#45fadf",
  "#9f211b",
  "#d2630a",
  "#ad31da",
  "#a36f17",
  "#1381a9",
  "#efc934",
]
