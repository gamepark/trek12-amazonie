import { css, Interpolation, Theme } from '@emotion/react'
import { BoardDescription, ItemContext, MaterialContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { Operator } from '@gamepark/trek12-amazonie/material/Operator'
import { range } from 'lodash'
import Images from '../images/Images'
import { nodeCoordinates } from '../locator/ExplorationNodeLocator'
import { ExplorationMapHelp } from './ExplorationMapHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'

export class ExplorationMapDescription extends BoardDescription {
  width = EXPEDITION_MAP_SIZE
  height = EXPEDITION_MAP_SIZE

  image = Images.forest1
  help = ExplorationMapHelp

  getStaticItems({ rules: { players } }: MaterialContext) {
    return players.map((player) => ({ id: player, location: { type: LocationType.ExplorationMap } }))
  }

  getLocations(item: MaterialItem, _context: ItemContext) {
    const player = item.id!
    return [
      ...nodeCoordinates.map((c, index) => ({ type: LocationType.ExpeditionNode, id: index, player })),
      ...range(4).map((x) => ({ id: Operator.MIN, type: LocationType.OperatorChoice, x })),
      ...range(4).map((x) => ({ id: Operator.MAX, type: LocationType.OperatorChoice, x })),
      ...range(4).map((x) => ({ id: Operator.MINUS, type: LocationType.OperatorChoice, x })),
      ...range(4).map((x) => ({ id: Operator.PLUS, type: LocationType.OperatorChoice, x })),
      ...range(4).map((x) => ({ id: Operator.MULTIPLY, type: LocationType.OperatorChoice, x }))
    ]
  }

  getFrontExtraCss(itemId: any, context: MaterialContext): Interpolation<Theme> {
    if (itemId === 1 && context.rules.players.length !== 1) {
      return css`
          outline: solid 0.2em yellow;
          filter: drop-shadow(0em 0em 0.5em yellow);
      `
    } else return css``


  }
}

export const explorationMapDescription = new ExplorationMapDescription()
