import { BoardDescription, ItemContext, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import Images from '../images/Images'
import { nodesCoordinates } from '../locator/ExplorationSpaceLocator'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { range } from 'lodash'
import { Operator } from '@gamepark/trek12/material/Operator'

export class ExplorationMapDescription extends BoardDescription {
  width = 13.5
  height = 13.5

  image = Images.forest1

  getStaticItems({ rules: { players } }: MaterialContext) {
    return players.map((player) => ({ id: player, location: { type: LocationType.ExplorationMap } }))
  }

  getLocations(_item: MaterialItem, context: ItemContext) {
    const { player } = context
    if (!player) return []
    return [
      ...nodesCoordinates.map((c, index) => ({ type: LocationType.ExpeditionSpace, id: index, player })),
      ...range(4).map((x) => ({ id: Operator.MIN, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.MAX, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.MINUS, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.PLUS, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.MULTIPLY, type: LocationType.OperatorChoice, x  }))
    ]
  }

  rules = () => null
}

export const explorationMapDescription = new ExplorationMapDescription()