import { PlayMoveButton, useLegalMoves, usePlayerId, useRules } from '@gamepark/react-game'
import { isCustomMoveType, SimultaneousRule } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { applyOperator, Operator } from '@gamepark/trek12-amazonie/material/Operator'
import { CustomMoveType } from '@gamepark/trek12-amazonie/rules/CustomMoveType'
import { Memory } from '@gamepark/trek12-amazonie/rules/Memory'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'

export const ChooseResultHeader: FC = () => {
  const rules = useRules<SimultaneousRule>()!
  const player = usePlayerId()
  const moves = useLegalMoves()
  const { t } = useTranslation()

  if (!player || !rules.isTurnToPlay(player)) {
    return <><Trans defaults="header.opponent.choose"></Trans></>
  }

  if (moves.find(move => move.itemType === 11)){
    return <><Trans defaults="header.player.choose.path"></Trans></>
  }

  const dice = [
    rules.material(MaterialType.YellowDice).getItem()!.location.rotation,
    rules.material(MaterialType.GreenDice).getItem()!.location.rotation + 1,
  ]

  const operand = rules.remind(Memory.Operand, player)
  if (operand) {
    return <><Trans defaults="header.you.choose.node" values={{result:applyOperator(operand, dice)}}></Trans></>
  }

  const max = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MAX)
  const min = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MIN)
  const minus = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MINUS)
  const plus = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.PLUS)
  const multiply = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MULTIPLY)

  return <>{t(`header.you.choose.operand`)}
    <PlayMoveButton move={max}>{t(`header.operand.max`)} ({applyOperator(Operator.MAX, dice)})</PlayMoveButton>
    <PlayMoveButton move={min}>{t(`header.operand.min`)} ({applyOperator(Operator.MIN, dice)})</PlayMoveButton>
    <PlayMoveButton move={minus}>{t(`header.operand.minus`)} ({applyOperator(Operator.MINUS, dice)})</PlayMoveButton>
    <PlayMoveButton move={plus}>{t(`header.operand.plus`)} ({applyOperator(Operator.PLUS, dice)})</PlayMoveButton>
    <PlayMoveButton move={multiply}>{t(`header.operand.multiply`)} ({applyOperator(Operator.MULTIPLY, dice)})</PlayMoveButton>
  </>
}
