import { css, Interpolation, Theme } from '@emotion/react'
import { BoardDescription, getRelativePlayerIndex, ItemContext, MaterialContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { Operator } from '@gamepark/trek12-amazonie/material/Operator'
import Images from '../images/Images'
import { nodeCoordinates } from '../locator/ExplorationNodeLocator'
import { ExplorationMapHelp } from './ExplorationMapHelp'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'
import orderBy from 'lodash/orderBy'
import range from 'lodash/range'

export class ExplorationMapDescription extends BoardDescription {
  width = EXPEDITION_MAP_SIZE
  height = EXPEDITION_MAP_SIZE

  image = Images.forest1
  help = ExplorationMapHelp

  getStaticItems(context: MaterialContext) {
    const { rules: { players }} = context
    return players.map((player) => ({ id: player, location: { type: LocationType.ExplorationMap } }))
  }

  getLocations(item: MaterialItem, _context: ItemContext) {
    const player = item.id!
    return [
      ...nodeCoordinates.map((c, index) => ({ type: LocationType.ExpeditionNode, id: index, player })),
      ...range(4).map((x) => ({ id: Operator.MIN, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.MAX, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.MINUS, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.PLUS, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.MULTIPLY, type: LocationType.OperatorChoice, x, player }))
    ]
  }

  getFrontExtraCss(itemId: any, { rules, player }: MaterialContext): Interpolation<Theme> {
    if (player && itemId === (player ?? rules.players[0])) {
      return css`
          outline: solid 0.2em yellow;
          filter: drop-shadow(0em 0em 0.5em yellow);
      `
    }

    return
  }
}

export const explorationMapDescription = new ExplorationMapDescription()
