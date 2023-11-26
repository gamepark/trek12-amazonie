import { LineLocator } from '@gamepark/react-game'

export class ObservationsLocator extends LineLocator {
    delta = {x: 11, y: 0, z: 0}
    coordinates = {x: -26.5, y: -10, z: 0}
}

export const observationsLocator = new ObservationsLocator()
