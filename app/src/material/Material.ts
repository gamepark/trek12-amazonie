import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { MaterialDescription } from '@gamepark/react-game/dist/components/material/MaterialDescription'
import { explorationMapDescription } from './ExplorationMapDescription'
import { numberCardDescription } from './NumberCardDescription'
import { observationCardDescription } from './ObservationCardDescription'
import { observationNumberDescription } from './ObservationNumberDescription'
import { observationScoresDescription } from './ObservationScoresDescription'
import { crossDescription } from './CrossDescription'

export const material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.ExplorationBoard]: explorationMapDescription,
  [MaterialType.NumberCard]: numberCardDescription,
  [MaterialType.ObservationCard]: observationCardDescription,
  [MaterialType.ObservationNumber]: observationNumberDescription,
  [MaterialType.ObservationScores]: observationScoresDescription,
  [MaterialType.Cross]: crossDescription
}