import { LocationType } from '@gamepark/trek12/material/LocationType'
import { ItemLocator } from '@gamepark/react-game'
import { PlayerId } from '@gamepark/trek12/Trek12Options'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { areaScoreLocator } from './AreaScoreLocator'
import { numbersLocator } from './NumbersLocator'
import { observationNumberLocator } from './ObservationNumberLocator'
import { observationsLocator } from './ObservationsLocator'
import { observationScoresLocator } from './ObservationScoresLocator'
import { expeditionBoardLocator } from './ExplorationMapLocator'
import { explorationSpaceLocator } from './ExplorationNodeLocator'
import { operatorChoiceLocator } from './OperatorChoiceLocator'
import { diceAreaLocator } from './DiceAreaLocator'
import { pathLocator } from './PathLocator'
import { pathwayScoreLocator } from './PathwayScoreLocator'
import { subTotalScoreLocator } from './SubTotalScoreLocator'
import { totalScoreLocator } from './TotalScoreLocator'

export const locators: Partial<Record<LocationType, ItemLocator<PlayerId, MaterialType, LocationType>>> = {
  [LocationType.Numbers]: numbersLocator,
  [LocationType.Observations]: observationsLocator,
  [LocationType.ObservationNumber]: observationNumberLocator,
  [LocationType.ObservationScores]: observationScoresLocator,
  [LocationType.ExplorationMap]: expeditionBoardLocator,
  [LocationType.ExpeditionNode]: explorationSpaceLocator,
  [LocationType.OperatorChoice]: operatorChoiceLocator,
  [LocationType.DiceArea]: diceAreaLocator,
  [LocationType.Path]: pathLocator,
  [LocationType.PathwayScore]: pathwayScoreLocator,
  [LocationType.AreaScore]: areaScoreLocator,
  [LocationType.SubTotalScore]: subTotalScoreLocator,
  [LocationType.TotalScore]: totalScoreLocator
}
