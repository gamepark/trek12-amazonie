import {OptionsSpec} from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import { ForestMap, forestMaps } from './forests/Forest'
import GameState from './GameState'
import { ObservationMix, observationsMixes } from './material/Observation'

export type Trek12Options = {
  players: number
  forestType:ForestMap
  observationMix:ObservationMix
}

export function isGameOptions(arg: GameState | Trek12Options): arg is Trek12Options {
  return typeof (arg as GameState).round === 'undefined'
}

export const Trek12OptionsSpec: OptionsSpec<Trek12Options> = {
  forestType:{
    label: (t: Function) => t('map.type.label'),
    help: (t: Function) => t('map.type.help'),
    values: forestMaps,
    valueSpec: forest => ({
      label: t => {
        switch (forest) {
            case ForestMap.Basic:
                return t('Basic Map')
            case ForestMap.Mangrove:
                return t('Mangrove Map')
        }
      },
    }),
    subscriberRequired:true
  },

  observationMix:{
    label: (t: Function) => t('observation.mix.label'),
    help: (t: Function) => t('observation.mix.help'),
    values: observationsMixes,
    valueSpec: obs => ({
      label: t => {
        switch (obs) {
            case ObservationMix.Basic:
                return t('Basic observations only')
            case ObservationMix.BasicAndPlants:
                return t('Basic + Plants observations')
            case ObservationMix.BasicAndGoodies:
                return t('Basic + Goodies observations')
            case ObservationMix.BasicPlantsAndGooies:
                return t('Basic + Plants + Goodies observations')
        }
      },
    }),
    subscriberRequired:true
  }
}

export function getPlayerName(playerId: number, t: TFunction) {
  return playerId
}

