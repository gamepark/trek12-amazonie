/** @jsxImportSource @emotion/react */
import { ItemLocator } from '@gamepark/react-game'
import { PlayerId } from '@gamepark/trek12/Trek12Options'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { ExplorationSpaceDescription } from './description/ExplorationSpaceDescription'
import { Location, XYCoordinates } from '@gamepark/rules-api'

export class ExplorationSpaceLocator extends ItemLocator<PlayerId, MaterialType, LocationType> {
  parentItemType = MaterialType.ExplorationMap

  locationDescription = new ExplorationSpaceDescription()

  position = { x: 0, y: 0, z: 1 }

  getPositionOnParent(location: Location<PlayerId, LocationType, number>): XYCoordinates {
    return spaceCoordinates[location.id!]
  }

  getParentItemId(location: Location) {
    return location.player
  }
}
export const spaceCoordinates: XYCoordinates[] = [
  { x: 33.7, y: 11.6 }, // 0
  { x: 42.9, y: 16.9 }, // 1
  { x: 52.5, y: 22.2 }, // 2
  { x: 61.9, y: 16.9 }, // 3
  { x: 71.3, y: 11.5 }, // 4
  { x: 24.3, y: 16.9 }, // 5
  { x: 33.7, y: 22.2 }, // 6
  { x: 43.2, y: 27.7 }, // 7
  { x: 52.6, y: 33.1 }, // 8
  { x: 61.9, y: 27.7 }, // 9
  { x: 71.3, y: 22.2 }, // 10
  { x: 80.7, y: 16.9 }, // 11
  { x: 14.8, y: 22.2 }, // 12
  { x: 24.3, y: 27.7 }, // 13
  { x: 33.7, y: 33.1 }, // 14
  { x: 43.1, y: 38.5 }, // 15
  { x: 52.6, y: 44 }, // 16
  { x: 61.9, y: 38.5 }, // 17
  { x: 71.3, y: 33.1 }, // 18
  { x: 80.7, y: 27.5 }, // 19
  { x: 14.8, y: 33.1 }, // 20
  { x: 24.3, y: 38.5 }, // 21
  { x: 33.7, y: 43.8 }, // 22
  { x: 43.1, y: 49.2 }, // 23
  { x: 61.9, y: 49.2 }, // 24
  { x: 71.3, y: 43.8 }, // 25
  { x: 80.8, y: 38.4 }, // 26
]

export const explorationSpaceLocator = new ExplorationSpaceLocator()