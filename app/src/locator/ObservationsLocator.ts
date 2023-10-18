import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'

export class ObservationsLocator extends LineLocator {
  delta = { x: 11, y: 0, z: 0 }
  coordinates = { x: -12, y: -10, z: 0}

  isHidden(item: MaterialItem) {
    return item.rotation?.y !== 1
  }
}

export const observationsLocator = new ObservationsLocator()