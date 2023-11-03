import {CardDescription} from '@gamepark/react-game'
import Jaguar from '../images/exploration/jaguar.jpg'
import Ara from '../images/exploration/ara.jpg'
import Toucan from '../images/exploration/toucan.jpg'
import RainbowBoa from '../images/exploration/rainbow-boa.jpg'
import Butterfly from '../images/exploration/butterfly.jpg'
import PoisonDartFrog from '../images/exploration/poison-dard-frog.jpg'
import Tamarind from '../images/exploration/tamarind.jpg'
import PygmyMarmoset from '../images/exploration/pygmy-marmoset.jpg'
import Back from '../images/exploration/back.jpg'
import {ExplorationCard} from '@gamepark/trek12/material/ExplorationCard'

export class ObservationCardDescription extends CardDescription {
  width = 6.3
  height = 8.8
  borderRadius = 0.3

  backImage = Back

  images = {
    [ExplorationCard.Jaguar]: Jaguar,
    [ExplorationCard.Ara]: Ara,
    [ExplorationCard.Toucan]: Toucan,
    [ExplorationCard.RainbowBoa]: RainbowBoa,
    [ExplorationCard.Butterfly]: Butterfly,
    [ExplorationCard.PoisonDartFrog]: PoisonDartFrog,
    [ExplorationCard.Tamarind]: Tamarind,
    [ExplorationCard.PygmyMarmoset]: PygmyMarmoset,
    //[ExplorationCard.CarnivorousPlant]
  }

  rules = () => null
}

export const observationCardDescription = new ObservationCardDescription()
