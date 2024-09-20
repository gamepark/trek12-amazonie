import { css } from '@emotion/react'
import { BoardDescription, ItemContext, MaterialContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { Operator } from '@gamepark/trek12-amazonie/material/Operator'
import range from 'lodash/range'
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
    return players.map(player => this.getPlayerMap(player))
  }

  getPlayerMap(player: number) {
    return { location: { type: LocationType.ExplorationMap, player } }
  }

  getLocations(item: MaterialItem, _context: ItemContext) {
    const player = item.location.player
    return [
      { type: LocationType.PlayerIdentity, player },
      ...nodeCoordinates.map((c, index) => ({ type: LocationType.ExpeditionNode, id: index, player })),
      ...range(4).map((x) => ({ id: Operator.MIN, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.MAX, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.MINUS, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.PLUS, type: LocationType.OperatorChoice, x, player })),
      ...range(4).map((x) => ({ id: Operator.MULTIPLY, type: LocationType.OperatorChoice, x, player }))
    ]
  }

  getItemExtraCss(item: MaterialItem, { player }: MaterialContext) {
    return player && item.id === player && css`
      outline: solid 0.2em yellow;
    `
  }
}

export const explorationMapDescription = new ExplorationMapDescription()
