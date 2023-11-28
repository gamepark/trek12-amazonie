import { MaterialDescription } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { areaNodeDescription } from './AreaNodeDescription'
import { areaScoreDescription } from './AreaScoreDescription'
import { crossDescription } from './CrossDescription'
import { dangerTickDescription } from './DangerTickDescription'
import { expeditionSpaceNumberDescription } from './ExpeditionNodeNumberDescription'
import { explorationMapDescription } from './ExplorationMapDescription'
import { greenDiceDescription } from './GreenDiceDescription'
import { numberCardDescription } from './NumberCardDescription'
import { observationCardDescription } from './ObservationCardDescription'
import { observationNumberDescription } from './ObservationNumberDescription'
import { observationScoresDescription } from './ObservationScoresDescription'
import { pathDescription } from './PathDescription'
import { pathwayScoreDescription } from './PathwayScoreDescription'
import { piranhaDescription } from './PiranhaDescription'
import { scoreRingDescription } from './ScoreRingDescription'
import { subTotalDescription } from './SubTotalDescription'
import { totalDescription } from './TotalDescription'
import { yellowDiceDescription } from './YellowDiceDescription'

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
  [MaterialType.AreaScore]: areaScoreDescription,
  [MaterialType.SubTotal]: subTotalDescription,
  [MaterialType.Total]: totalDescription,
  [MaterialType.Piranha]: piranhaDescription,
  [MaterialType.DangerTick]: dangerTickDescription
}
