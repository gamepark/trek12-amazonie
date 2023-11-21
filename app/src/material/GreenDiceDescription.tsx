/** @jsxImportSource @emotion/react */
import { CubicDiceDescription, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import Face1 from '../images/dice/green/1.jpg'
import Face2 from '../images/dice/green/2.jpg'
import Face3 from '../images/dice/green/3.jpg'
import Face4 from '../images/dice/green/4.jpg'
import Face5 from '../images/dice/green/5.jpg'
import Face6 from '../images/dice/green/6.jpg'

export class GreenDiceDescription extends CubicDiceDescription {
  width = 2
  borderRadius = 0
  color= '#6db236'
  images = [
    Face1,
    Face2,
    Face3,
    Face4,
    Face5,
    Face6
  ]

  getRotations(item: MaterialItem, context: ItemContext) {
    return ['rotate3d(1, -1, 0, 15deg)', 'translateZ(1em)', ...super.getRotations(item, context)]
  }

}

export const greenDiceDescription = new GreenDiceDescription()
