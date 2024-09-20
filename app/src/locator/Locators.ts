import { Locator } from '@gamepark/react-game'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { PlayerId } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { areaScoreLocator } from './AreaScoreLocator'
import { dangerTickLocator } from './DangerTickLocator'
import { diceAreaLocator } from './DiceAreaLocator'
import { expeditionBoardLocator } from './ExplorationMapLocator'
import { explorationSpaceLocator } from './ExplorationNodeLocator'
import { numbersLocator } from './NumbersLocator'
import { observationNumberLocator } from './ObservationNumberLocator'
import { observationScoresLocator } from './ObservationScoresLocator'
import { observationsLocator } from './ObservationsLocator'
import { operatorChoiceLocator } from './OperatorChoiceLocator'
import { pathLocator } from './PathLocator'
import { pathwayScoreLocator } from './PathwayScoreLocator'
import { playerIdentityLocator } from './PlayerIdentityLocator'
import { subTotalScoreLocator } from './SubTotalScoreLocator'
import { totalScoreLocator } from './TotalScoreLocator'

export const locators: Partial<Record<LocationType, Locator<PlayerId, MaterialType, LocationType>>> = {
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
  [LocationType.TotalScore]: totalScoreLocator,
  [LocationType.DangerTick]: dangerTickLocator,
  [LocationType.PlayerIdentity]: playerIdentityLocator
}
