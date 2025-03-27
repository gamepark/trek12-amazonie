import { OptionsSpec } from '@gamepark/rules-api'

export type PlayerId = number
export type Trek12AmazonieOptions = {
  players: PlayerId
}
export const Trek12AmazonieOptionsSpec: OptionsSpec<Trek12AmazonieOptions> = {
  subscriberRequired: true
}
