import { LocationType } from '@gamepark/trek12/material/LocationType'
import { ItemLocator } from '@gamepark/react-game'
import { PlayerId } from '@gamepark/trek12/Trek12Options'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { numbersLocator } from './NumbersLocator'
import { observationNumberLocator } from './ObservationNumberLocator'
import { observationsLocator } from './ObservationsLocator'
import { observationScoresLocator } from './ObservationScoresLocator'
import { expeditionBoardLocator } from './ExpeditionBoardLocator'

export const locators: Partial<Record<LocationType, ItemLocator<PlayerId, MaterialType, LocationType>>> = {
  [LocationType.Numbers]: numbersLocator,
  [LocationType.Observations]: observationsLocator,
  [LocationType.ObservationNumber]: observationNumberLocator,
  [LocationType.ObservationScores]: observationScoresLocator,
  [LocationType.ExpeditionBoard]: expeditionBoardLocator
}