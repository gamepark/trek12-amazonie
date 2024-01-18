import { LocationDescription } from '@gamepark/react-game'
import { Coordinates } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { PlayerId } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { EXPEDITION_MAP_SIZE } from '../../material/utils/MapUtils'

export class DangerAreaDescription extends LocationDescription<PlayerId, MaterialType, LocationType> {
  height = 0.12 * EXPEDITION_MAP_SIZE
  width = 0.16 * EXPEDITION_MAP_SIZE
  borderRadius = 0.5

  getCoordinates(): Coordinates {
    return {
      x: 0.85,
      y: 0,
      z: 0
    }
  }
}
