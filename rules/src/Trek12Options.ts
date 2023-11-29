import { OptionsSpec } from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import { ForestMap, forestMaps } from './forests/Forest'

export type PlayerId = number
export type Trek12Options = {
  players: PlayerId
}
export const Trek12OptionsSpec: OptionsSpec<Trek12Options> = {
}

export function getPlayerName(playerId: number, t: TFunction) {
  return playerId
}

