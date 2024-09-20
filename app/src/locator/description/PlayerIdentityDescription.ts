/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game'
import { PlayerReminder } from './PlayerReminder'

export class PlayerIdentityDescription extends LocationDescription {
  width = 6.5
  height = 2
  borderRadius = 1
  content = PlayerReminder
}