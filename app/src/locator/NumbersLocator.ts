import { LineLocator } from '@gamepark/react-game'

export class NumbersLocator extends LineLocator {
  delta = { x: 11, y: 0, z: 0 }
  coordinates = { x: -7.2, y: -8, z: 0}
}

export const numbersLocator = new NumbersLocator()