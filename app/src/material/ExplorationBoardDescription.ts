import { BoardDescription, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import Images from '../images/Images'

export class ExplorationBoardDescription extends BoardDescription {
  width = 13.5
  height = 13.5

  image = Images.forest1

  getStaticItems({ rules: { players } }: MaterialContext) {
    return players.map((player) => ({ id: player, location: { type: LocationType.ExpeditionBoard } }))
  }

  rules = () => null
}

export const explorationBoardDescription = new ExplorationBoardDescription()