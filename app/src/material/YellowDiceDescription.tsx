/** @jsxImportSource @emotion/react */
import { CubicDiceDescription } from '@gamepark/react-game/dist/components/material/Dices/CubicDiceDescription'
import Face0 from '../images/dice/yellow/0.jpg'
import Face1 from '../images/dice/yellow/1.jpg'
import Face2 from '../images/dice/yellow/2.jpg'
import Face3 from '../images/dice/yellow/3.jpg'
import Face4 from '../images/dice/yellow/4.jpg'
import Face5 from '../images/dice/yellow/5.jpg'

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

}

export const yellowDiceDescription = new YellowDiceDescription()
