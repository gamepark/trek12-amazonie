import { BoardDescription, ComponentSize, ItemContext, MaterialContext, useRules } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { Operator } from '@gamepark/trek12-amazonie/material/Operator'
import { range } from 'lodash'
import Images from '../images/Images'
import { nodeCoordinates } from '../locator/ExplorationNodeLocator'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'
import { ExplorationMapHelp } from './ExplorationMapHelp'
import { Interpolation, Theme, css } from '@emotion/react'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'

export class ExplorationMapDescription extends BoardDescription {
  width = EXPEDITION_MAP_SIZE
  height = EXPEDITION_MAP_SIZE

  image = Images.forest1

  getStaticItems({ rules: { players } }: MaterialContext) {
    return players.map((player) => ({ id: player, location: { type: LocationType.ExplorationMap } }))
  }

  getLocations(item: MaterialItem, context: ItemContext) {
    const player = item.id!
    return [
      ...nodeCoordinates.map((c, index) => ({ type: LocationType.ExpeditionNode, id: index, player })),
      ...range(4).map((x) => ({ id: Operator.MIN, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.MAX, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.MINUS, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.PLUS, type: LocationType.OperatorChoice, x  })),
      ...range(4).map((x) => ({ id: Operator.MULTIPLY, type: LocationType.OperatorChoice, x  }))
    ]
  }

  getFrontExtraCss(itemId: any, context: MaterialContext): Interpolation<Theme> {
    if (itemId === 1) {
      return css`
      outline:solid 0.3em lime;
      filter:drop-shadow(0em 0em 0.5em lime);
    `
    } else return css``


  }

  help = ExplorationMapHelp
}

export const explorationMapDescription = new ExplorationMapDescription()
