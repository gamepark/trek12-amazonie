/** @jsxImportSource @emotion/react */
import { DropAreaDescription, MaterialContext } from '@gamepark/react-game'
import { isCreateItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import equal from 'fast-deep-equal'
import { EXPEDITION_MAP_SIZE } from '../../material/utils/MapUtils'
import { AreaNodeHelp } from './AreaNodeHelp'


export class ExplorationNodeDescription extends DropAreaDescription {
  height = 0.105 * EXPEDITION_MAP_SIZE
  width = 0.105 * EXPEDITION_MAP_SIZE
  borderRadius = 4
  help = AreaNodeHelp

  isMoveToLocation(move: MaterialMove, location: Location, { rules }: MaterialContext): boolean {
    if (!isCreateItemType(MaterialType.ExpeditionNodeValue)(move)) return false
    if (!equal(move.item.location, location)) return false
    return !rules
      .material(MaterialType.ExpeditionNodeValue)
      .location((location) => equal(move.item.location, location))
      .length
  }
}
