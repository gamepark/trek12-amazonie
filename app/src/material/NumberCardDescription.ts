import { CardDescription, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12/material/LocationType'
import { NumberCard } from '@gamepark/trek12/material/NumberCard'
import Zero from '../images/number/0.jpg'
import One from '../images/number/1.jpg'
import Two from '../images/number/2.jpg'
import Three from '../images/number/3.jpg'
import Four from '../images/number/4.jpg'
import Five from '../images/number/5.jpg'
import Six from '../images/number/6.jpg'
import Back from '../images/exploration/back.jpg'

export class NumberCardDescription extends CardDescription {
  width = 4.2
  height = 6.3
  borderRadius = 0.3

  backImage = Back

  images = {
    [NumberCard.Zero]: Zero,
    [NumberCard.One]: One,
    [NumberCard.Two]: Two,
    [NumberCard.Three]: Three,
    [NumberCard.Four]: Four,
    [NumberCard.Five]: Five,
    [NumberCard.Six]: Six,
  }

  rules = () => null
}

export const numberCardDescription = new NumberCardDescription()