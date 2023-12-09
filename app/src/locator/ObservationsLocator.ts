import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'

export class ObservationsLocator extends LineLocator {

    getCoordinates(_item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Coordinates {
        const hasMoreThanThreePlayers = context.rules.game.players.length > 3
        return hasMoreThanThreePlayers ? {x: 33, y: -10, z: 0} : {x: -26.5, y: -10, z: 0}
    }
    getDelta(_item: MaterialItem<number, number>, context: ItemContext<number, number, number>): Partial<Coordinates> {
        const hasMoreThanThreePlayers = context.rules.game.players.length > 3
        return hasMoreThanThreePlayers ? {x: 0, y: 10, z: 0} : {x: 11, y: 0, z: 0}
    }
}

export const observationsLocator = new ObservationsLocator()
