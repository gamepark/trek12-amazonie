/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { PlayerId } from '@gamepark/trek12/Trek12Options'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { isCreateItemType, Location, MaterialMove } from '@gamepark/rules-api'
import equal from 'fast-deep-equal'
//import { css } from '@emotion/react'


export class ExplorationSpaceDescription extends LocationDescription<PlayerId, MaterialType, LocationType> {
  alwaysVisible = true
  height = 1.4
  width = 1.4
  borderRadius= 4

  /*getExtraCss(location: Location) {
    return css`
      &:after {
        position: absolute;
        font-size: 0.5em;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: '${location.id}';
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
    `
  }*/

  isMoveToLocation(move: MaterialMove, location: Location, { rules }: MaterialContext): boolean {
    if (!isCreateItemType(MaterialType.ExpeditionSpaceValue)(move)) return false
    if (!equal(move.item.location, location)) return false
    return !rules
      .material(MaterialType.ExpeditionSpaceValue)
      .location((location) => equal(move.item.location, location))
      .length
  }

  rules = () => null
}
