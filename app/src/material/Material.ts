import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { MaterialDescription } from '@gamepark/react-game/dist/components/material/MaterialDescription'
import { explorationBoardDescription } from './ExplorationBoardDescription'
import { numberCardDescription } from './NumberCardDescription'
import { observationCardDescription } from './ObservationCardDescription'
import { observationNumber } from './ObservationNumber'
import { observationScores } from './ObservationScores'

export const material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.ExplorationBoard]: explorationBoardDescription,
  [MaterialType.NumberCard]: numberCardDescription,
  [MaterialType.ObservationCard]: observationCardDescription,
  [MaterialType.ObservationNumber]: observationNumber,
  [MaterialType.ObservationScores]: observationScores,
}