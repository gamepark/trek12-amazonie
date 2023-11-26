/** @jsxImportSource @emotion/react */
import { CubicDiceDescription, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import Face0 from '../images/dice/yellow/0.jpg'
import Face1 from '../images/dice/yellow/1.jpg'
import Face2 from '../images/dice/yellow/2.jpg'
import Face3 from '../images/dice/yellow/3.jpg'
import Face4 from '../images/dice/yellow/4.jpg'
import Face5 from '../images/dice/yellow/5.jpg'
import { YellowDiceHelp } from './YellowDiceHelp'

export class YellowDiceDescription extends CubicDiceDescription {
  width = 2
  borderRadius = 0
  color= '#f0c800'
  images = [
    Face0,
    Face1,
    Face2,
    Face3,
    Face4,
    Face5,
  ]

  getRotations(item: MaterialItem, context: ItemContext) {
    return ['rotate3d(1, -1, 0, 15deg)', 'translateZ(1em)', ...super.getRotations(item, context)]
  }

  help = YellowDiceHelp

}

export const yellowDiceDescription = new YellowDiceDescription()
