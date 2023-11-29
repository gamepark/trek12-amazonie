import { CardDescription } from '@gamepark/react-game'
import { ExplorationCard } from '@gamepark/trek12/material/ExplorationCard'
import Ara from '../images/exploration/ara.jpg'
import Back from '../images/exploration/back.jpg'
import Butterfly from '../images/exploration/butterfly.jpg'
import Jaguar from '../images/exploration/jaguar.jpg'
import PoisonDartFrog from '../images/exploration/poison-dard-frog.jpg'
import PygmyMarmoset from '../images/exploration/pygmy-marmoset.jpg'
import RainbowBoa from '../images/exploration/rainbow-boa.jpg'
import Tamarind from '../images/exploration/tamarind.jpg'
import Toucan from '../images/exploration/toucan.jpg'
import { ObservationCardHelp } from './ObservationCardHelp'

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

  help = ObservationCardHelp
}

export const observationCardDescription = new ObservationCardDescription()
