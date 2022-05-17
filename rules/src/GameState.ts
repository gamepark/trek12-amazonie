import PlayerState, { setupPlayers } from './PlayerState'
import shuffle from 'lodash.shuffle'
import Animal, {getObservationMix, ObservationMix} from './material/Observation'
import { Trek12Options } from './Trek12Options'
import rollDice from './material/Dice'
import { discoveringCards } from './material/DiscoveringCards'
import { ForestMap } from './forests/Forest'

type GameState = {
  players: PlayerState[],
  observation: Observation[],
  dice: number[]
  round:number
  forestMap:ForestMap
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

export function setupNewGame(forestMap:ForestMap = ForestMap.Basic, nbPlayers:number, obsMix:ObservationMix = ObservationMix.Basic):GameState{
  const obsToReturn:Observation[] = setupObservation(obsMix)
  return {
    players:setupPlayers(forestMap, nbPlayers, obsToReturn.map((obs, index) => obs.discoveringValue)),
    observation:obsToReturn,
    dice:rollDice(),
    round:1,
    forestMap:forestMap
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


