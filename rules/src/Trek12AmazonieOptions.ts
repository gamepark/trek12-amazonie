import { OptionsSpecV2 } from '@gamepark/rules-api'

export type PlayerId = number
export type Trek12AmazonieOptions = {
  players: PlayerId
}
/**
 * The option space of trek12-amazonie: structure only.
 *
 * Labels live in the game's presentation document, published beside its translations at
 * `/options/<locale>.json` and keyed by convention. Subscription and competitive gates live in
 * the platform database, so they can change without releasing the game again.
 *
 * That is where the subscription gates went.
 */
export const Trek12AmazonieOptionsSpecV2: OptionsSpecV2 = {
  specVersion: 2,
  players: { min: 1, max: 6 }
}
