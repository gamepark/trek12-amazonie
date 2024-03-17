import { GridLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'
import { DangerAreaDescription } from './description/DangerAreaDescription'

export class DangerTickLocator extends GridLocator {
  itemsGap = { x: 0.0265 * EXPEDITION_MAP_SIZE }
  linesGap = { y: 0.024 * EXPEDITION_MAP_SIZE }
  itemsPerLine = 4

  locationDescription = new DangerAreaDescription()

  parentItemType = MaterialType.ExplorationMap

  getCoordinates(item: MaterialItem, context: ItemContext) {
    if(item.location.x! < 8) {
      return { x: 0, y: 0, z: 1 }
    }

    return { x: 15, y: -5, z: 1 }
  }

  coordinates = { x: 0, y: 0, z: 1 }
  positionOnParent = { x: 70.1, y: 83.6 }

  getPositionOnParent(_location: Location, context: ItemContext) {
    return getDangerTicketCoordinates(context.rules.game.players.length)
  }

  getParentItemId(location: Location) {
    return location.player
  }
}

export const dangerTickLocator = new DangerTickLocator()

function getDangerTicketCoordinates(players:number): Coordinates{
  switch (players){
    case 1 :
      return { x: -8.9, y: 109.7, z:0 }
    case 2:
    case 3:
      return { x: -8.9, y: 109.7, z:0 }
    case 4:
    case 5:
    case 6:
    default:
      return { x: -8.9, y: 109.7, z:0 }
  }
}
