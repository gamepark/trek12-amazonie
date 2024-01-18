import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Coordinates, Location } from '@gamepark/rules-api/dist/material/location/Location'
import { isCustomMoveType } from '@gamepark/rules-api/dist/material/moves/CustomMove'
import { isCreateItemType } from '@gamepark/rules-api/dist/material/moves/items/CreateItem'
import { MaterialMove } from '@gamepark/rules-api/dist/material/moves/MaterialMove'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { CustomMoveType } from '@gamepark/trek12-amazonie/rules/CustomMoveType'
import { PlayerId } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { EXPEDITION_MAP_SIZE } from '../../material/utils/MapUtils'

export class OperatorChoiceDescription extends LocationDescription<PlayerId, MaterialType, LocationType> {
  height = 0.037 * EXPEDITION_MAP_SIZE
  width = 0.039 * EXPEDITION_MAP_SIZE
  rotateZ = -2

  getCoordinates(location: Location): Coordinates {
    return {
      x: this.width * location.x!,
      y: -0.01 * location.x!,
      z: 0
    }
  }
}
