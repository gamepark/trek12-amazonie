import { isEnumValue } from '@gamepark/rules-api'


export enum Operator {
  MIN = 1,
  MAX,
  MINUS,
  PLUS,
  MULTIPLY
}

export const applyOperator = (operator: Operator, values: number[]): number => {
  switch (operator) {
    case Operator.MAX:
      return Math.max(...values)
    case Operator.MIN:
      return Math.min(...values)
    case Operator.MINUS:
      return Math.abs(values[0] - values[1])
    case Operator.PLUS:
      return values[0] + values[1]
    case Operator.MULTIPLY:
      return values[0] * values[1]
  }
}

export const operators = Object.values(Operator).filter(isEnumValue)