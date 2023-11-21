import { BoardDescription, ItemContext, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import Images from '../images/Images'
import { nodeCoordinates } from '../locator/ExplorationNodeLocator'
import { MaterialItem } from '@gamepark/rules-api'
import { range } from 'lodash'
import { Operator } from '@gamepark/trek12/material/Operator'
import { paths } from '@gamepark/trek12/rules/helper/Node'

export class ExplorationMapDescription extends BoardDescription {
  width = 13.5
  height = 13.5

  image = Images.forest1

  getStaticItems({ rules: { players } }: MaterialContext) {
    return players.map((player) => ({ id: player, location: { type: LocationType.ExplorationMap } }))
  }

  getLocations(item: MaterialItem, context: ItemContext) {
    const player = item.id!
    return [
      ...nodeCoordinates.map((c, index) => ({ type: LocationType.ExpeditionNode, id: index, player })),
      ...paths.map((path) => ({ type: LocationType.Path, id: path, player })),
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
