import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { MaterialDescription } from '@gamepark/react-game/dist/components/material/MaterialDescription'
import { pathwayScoreLocator } from '../locator/PathwayScoreLocator'
import { areaNodeDescription } from './AreaNodeDescription'
import { areaScoreDescription } from './AreaScoreDescription'
import { explorationMapDescription } from './ExplorationMapDescription'
import { numberCardDescription } from './NumberCardDescription'
import { observationCardDescription } from './ObservationCardDescription'
import { observationNumberDescription } from './ObservationNumberDescription'
import { observationScoresDescription } from './ObservationScoresDescription'
import { crossDescription } from './CrossDescription'
import { greenDiceDescription } from './GreenDiceDescription'
import { pathwayScoreDescription } from './PathwayScoreDescription'
import { yellowDiceDescription } from './YellowDiceDescription'
import { expeditionSpaceNumberDescription } from './ExpeditionNodeNumberDescription'
import { scoreRingDescription } from './ScoreRingDescription'
import { pathDescription } from './PathDescription'

export const material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.ExplorationMap]: explorationMapDescription,
  [MaterialType.NumberCard]: numberCardDescription,
  [MaterialType.ObservationCard]: observationCardDescription,
  [MaterialType.ObservationNumber]: observationNumberDescription,
  [MaterialType.ObservationScores]: observationScoresDescription,
  [MaterialType.Cross]: crossDescription,
  [MaterialType.GreenDice]: greenDiceDescription,
  [MaterialType.YellowDice]: yellowDiceDescription,
  [MaterialType.ExpeditionNodeValue]: expeditionSpaceNumberDescription,
  [MaterialType.ScoreRing]: scoreRingDescription,
  [MaterialType.Path]: pathDescription,
  [MaterialType.AreaNode]: areaNodeDescription,
  [MaterialType.PathwayScore]: pathwayScoreDescription,
  [MaterialType.AreaScore]: areaScoreDescription
}
