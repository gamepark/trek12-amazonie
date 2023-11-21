/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { isCreateItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { PlayerId } from '@gamepark/trek12/Trek12Options'
import equal from 'fast-deep-equal'

//import { css } from '@emotion/react'


export class ExplorationNodeDescription extends LocationDescription<PlayerId, MaterialType, LocationType> {
  alwaysVisible = true
  height = 1.4
  width = 1.4
  borderRadius= 4

  /**getExtraCss(location: Location) {
    return css`
      &:after {
        position: absolute;
        font-size: 0.5em;
        left: 0;
        color: black;
        top: 0;
        width: 100%;
        height: 100%;
        content: '${location.id}';
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
    `
  }**/

  isMoveToLocation(move: MaterialMove, location: Location, { rules }: MaterialContext): boolean {
    if (!isCreateItemType(MaterialType.ExpeditionNodeValue)(move)) return false
    if (!equal(move.item.location, location)) return false
    return !rules
      .material(MaterialType.ExpeditionNodeValue)
      .location((location) => equal(move.item.location, location))
      .length
  }


  rules = () => null
}
