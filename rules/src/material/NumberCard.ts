import { getEnumValues } from '@gamepark/rules-api'

export enum NumberCard {
  Zero = 1,
  One,
  Two,
  Three,
  Four,
  Five,
  Six
}

export const numberCards = getEnumValues(NumberCard)