import { getEnumValues } from '@gamepark/rules-api'

export enum ExplorationCard {
  Jaguar = 1,
  Ara,
  Toucan,
  RainbowBoa,
  Butterfly,
  PoisonDartFrog,
  Tamarind,
  PygmyMarmoset,
  //Bird,
  //Cat,
  //CarnivorousPlant
}

export const explorationCards = getEnumValues(ExplorationCard)

export const ExplorationCardScores: Record<ExplorationCard, number[]> = {
  [ExplorationCard.Jaguar]: [0, 1, 2, 4, 7, 15],
  [ExplorationCard.Ara]: [0, 0, 4, 8, 12, 16],
  [ExplorationCard.Toucan]: [2, 4, 6, 8, 10, 12],
  [ExplorationCard.RainbowBoa]: [3, 6, 7, 8, 9, 10],
  [ExplorationCard.Butterfly]: [4, 5, 6, 7, 8, 9],
  [ExplorationCard.PoisonDartFrog]: [0, 0, 0, 10, 15, 20],
  [ExplorationCard.Tamarind]: [2, 4, 6, 8, 9, 10],
  [ExplorationCard.PygmyMarmoset]: [6, 9, 11, 13, 15, 17]
  //[ExplorationCard.Bird]: [7,8,9,10,12,15],
  //[ExplorationCard.Cat]: [1,3,6,10,15,20],
  //[ExplorationCard.CarnivorousPlant]: [12,10,8,6,4,2],
}
