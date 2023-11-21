import { Material, MaterialGame, MaterialItem, MaterialRulesPart } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { isAdjacent } from '../../material/Spot'
import { PlayerId } from '../../Trek12Options'
import { LocationType } from '../../material/LocationType'
import { Node } from './Node'
import uniqBy from 'lodash/uniqBy'

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


    if (!adjacent.length) return adjacent
    this.pathNodes.push(...adjacent)
    return adjacent
      .flatMap((a) => this.getAdjacentNodes(a))
  }

  isNodeAlreadyPresent(item: MaterialItem) {
    return this.pathNodes.some((node) => node.location.id === item.location.id)
  }
}
