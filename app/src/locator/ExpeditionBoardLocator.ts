import { ItemLocator, LineLocator } from '@gamepark/react-game'

export class ExpeditionBoardLocator extends ItemLocator {
  position = { x: 0, y: 8, z: 0}
}

export const expeditionBoardLocator = new ExpeditionBoardLocator()