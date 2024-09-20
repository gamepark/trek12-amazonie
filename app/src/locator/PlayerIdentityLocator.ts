import { Locator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { explorationMapDescription } from '../material/ExplorationMapDescription'
import { PlayerIdentityDescription } from './description/PlayerIdentityDescription'

export class PlayerIdentityLocator extends Locator {
  locationDescription = new PlayerIdentityDescription()
  parentItemType = MaterialType.ExplorationMap
  getParentItem = (location: Location) => explorationMapDescription.getPlayerMap(location.player!)
  positionOnParent = { x: 22, y: 58 }
}

export const playerIdentityLocator = new PlayerIdentityLocator()
