import { TokenDescription } from '@gamepark/react-game'
import Piranha from '../images/piranha.png'
import { EXPEDITION_MAP_SIZE } from './utils/MapUtils'
import { PiranhaHelp } from './PiranhaHelp'

export class PiranhaDescription extends TokenDescription {
  width = 0.0315 * EXPEDITION_MAP_SIZE
  height = 0.0223 * EXPEDITION_MAP_SIZE
  borderRadius = 0.3

  image = Piranha

  help = PiranhaHelp

}

export const piranhaDescription = new PiranhaDescription()
