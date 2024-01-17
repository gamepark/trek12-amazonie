/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { Location, MaterialItem, XYCoordinates } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { PlayerId } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { EXPEDITION_MAP_SIZE } from '../material/utils/MapUtils'
import { ExplorationNodeDescription } from './description/ExplorationNodeDescription'

export class ExplorationNodeLocator extends ItemLocator<PlayerId, MaterialType, LocationType> {
  parentItemType = MaterialType.ExplorationMap

  locationDescription = new ExplorationNodeDescription()

  getPosition(_item: MaterialItem, { type }: ItemContext) {
    if (type === MaterialType.ExpeditionNodeValue) {
      return { x: 0, y: 0, z: 2 }
    }

    if (type === MaterialType.Piranha) {
      return { x: -0.015 * EXPEDITION_MAP_SIZE, y: -0.03 * EXPEDITION_MAP_SIZE, z: 2 }
    }

    if (type === MaterialType.Spider) {
      return { x: -0.035 * EXPEDITION_MAP_SIZE, y: 0, z: 2 }
    }

    return { x: 0, y: 0, z: 1 }
  }

  getPositionOnParent(location: Location): XYCoordinates {
    return nodeCoordinates[location.id!]
  }

  getParentItemId(location: Location) {
    return location.player
  }

}

export const nodeCoordinates: XYCoordinates[] = [
  { x: 33.65, y: 11.55 }, // 0
  { x: 43.05, y: 16.95 }, // 1
  { x: 52.45, y: 22.3 }, // 2
  { x: 61.8, y: 16.95 }, // 3
  { x: 71.25, y: 11.45 }, // 4
  { x: 24.25, y: 17 }, // 5
  { x: 33.75, y: 22.35 }, // 6
  { x: 43.2, y: 27.8 }, // 7
  { x: 52.5, y: 33 }, // 8
  { x: 61.8, y: 27.7 }, // 9
  { x: 71.2, y: 22.2 }, // 10
  { x: 80.6, y: 16.8 }, // 11
  { x: 14.85, y: 22.35 }, // 12
  { x: 24.25, y: 27.8 }, // 13
  { x: 33.65, y: 33.15 }, // 14
  { x: 43.1, y: 38.5 }, // 15
  { x: 52.55, y: 43.9 }, // 16
  { x: 61.9, y: 38.4 }, // 17
  { x: 71.3, y: 33.1 }, // 18
  { x: 80.6, y: 27.5 }, // 19
  { x: 14.9, y: 33.1 }, // 20
  { x: 24.25, y: 38.5 }, // 21
  { x: 33.65, y: 43.85 }, // 22
  { x: 43.1, y: 49.2 }, // 23
  { x: 61.9, y: 49.1 }, // 24
  { x: 71.2, y: 43.8 }, // 25
  { x: 80.6, y: 38.35 } // 26
]

export const explorationSpaceLocator = new ExplorationNodeLocator()
