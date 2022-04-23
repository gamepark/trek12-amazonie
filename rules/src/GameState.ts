import PlayerState, { setupPlayers } from './PlayerState'
import shuffle from 'lodash.shuffle'
import Animal, {getObservationMix, ObservationMix} from './material/Observation'
import { Trek12Options } from './Trek12Options'
import rollDice from './material/Dice'
import { discoveringCards } from './material/DiscoveringCards'

type GameState = {
  players: PlayerState[],
  observation: Observation[],
  dice: number[]
  round:number
}
export type Observation = {
  animal:number,
  discoveringValue:number
  isRevealed:boolean
}

export type ObservationView = Omit<Observation, 'animal'>

export function isObservationView(obs:Observation|ObservationView):obs is ObservationView{
  return (obs as Observation).animal === undefined
}

export function setupNewGame(options: Trek12Options):GameState{
  return {
    players:setupPlayers(options.forestType, options.players),
    observation:setupObservation(options.observationMix),
    dice:rollDice(),
    round:1
  }
}

function setupObservation(obsMix: ObservationMix = ObservationMix.Basic):[Observation,Observation,Observation]{
  const arrayToShuffle:Animal[] = getObservationMix(obsMix)
  const shuffledArray:number[] = shuffle(arrayToShuffle.map((_,i) => i))
  const shuffledDiscovering:number[] = shuffle(discoveringCards)
  return [{animal:shuffledArray[0], isRevealed:false, discoveringValue:shuffledDiscovering[0]},
          {animal:shuffledArray[1], isRevealed:false, discoveringValue:shuffledDiscovering[1]},
          {animal:shuffledArray[2], isRevealed:false, discoveringValue:shuffledDiscovering[2]}]
}

export default GameState


