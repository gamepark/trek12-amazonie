import { LocationDescription } from '@gamepark/react-game'
import { css } from '@emotion/react'
import { PlayerId } from '@gamepark/trek12/Trek12Options'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { Location } from '@gamepark/rules-api'

export class ExplorationSpaceDescription extends LocationDescription<PlayerId, MaterialType, LocationType> {
  alwaysVisible = true
  height = 1.4
  width = 1.4
  borderRadius= 4

  getExtraCss(location: Location) {
    return css`
      background-color: rgba(255, 0, 0, 0.51);
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
  }
  rules = () => null
}