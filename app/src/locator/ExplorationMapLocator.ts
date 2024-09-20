import { FlexLocator, getRelativePlayerIndex, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

export class ExplorationMapLocator extends FlexLocator {
  getGap(_: Location, { rules: { players } }: MaterialContext) {
    return players.length === 2 ? { x: 25 } : { x: 20 }
  }

  lineGap = { y: 20 }
  lineSize = 3

  getCoordinates(_: Location, { rules: { players } }: MaterialContext) {
    return { x: -20, y: (players.length === 2 || players.length === 3) ? 5 : -5 }
  }

  getLocationIndex(location: Location, context: MaterialContext) {
    return getRelativePlayerIndex(context, location.player)
  }
}

export const expeditionBoardLocator = new ExplorationMapLocator()
