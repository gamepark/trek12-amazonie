import { OptionsSpec } from '@gamepark/rules-api'
import { TFunction } from 'i18next'

export type PlayerId = number
export type Trek12AmazonieOptions = {
  players: PlayerId
}
export const Trek12AmazonieOptionsSpec: OptionsSpec<Trek12AmazonieOptions> = {
}

export function getPlayerName(playerId: number, t: TFunction) {
  return playerId
}

