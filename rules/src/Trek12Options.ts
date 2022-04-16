import {OptionsSpec} from '@gamepark/rules-api'
import {TFunction} from 'i18next'
import GameState from './GameState'
import PlayerColor, {playerColors} from './PlayerColor'

/**
 * This is the options for each players in the game.
 */
type Trek12PlayerOptions = { id: PlayerColor }

/**
 * This is the type of object that the game receives when a new game is started.
 * The first generic parameter, "{}", can be changed to include game options like variants or expansions.
 */
export type Trek12Options = {
  players: Trek12PlayerOptions[]
}

/**
 * Typeguard to help Typescript distinguish between a GameState and new game's options, for you main class constructor.
 * @param arg GameState or Game options
 * @return true if arg is a Game options
 */
export function isGameOptions(arg: GameState | Trek12Options): arg is Trek12Options {
  return typeof (arg as GameState).deck === 'undefined'
}

/**
 * This object describes all the options a game can have, and will be used by GamePark website to create automatically forms for you game
 * (forms for friendly games, or forms for matchmaking preferences, for instance).
 */
export const Trek12OptionsSpec: OptionsSpec<Trek12Options> = {
  players: {
    id: {
      label: (t: TFunction) => t('Color'),
      values: playerColors,
      valueSpec: color => ({label: t => getPlayerName(color, t)})
    }
  }
}

export function getPlayerName(playerId: PlayerColor, t: TFunction) {
  switch (playerId) {
    case PlayerColor.Red:
      return t('Red player')
    case PlayerColor.Blue:
      return t('Blue player')
    case PlayerColor.Green:
      return t('Green player')
    case PlayerColor.Yellow:
      return t('Yellow player')
  }
}