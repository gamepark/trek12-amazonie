import { SimultaneousRule } from '@gamepark/rules-api/dist/material/rules/SimultaneousRule'
import { FC } from 'react'
import { useRules } from '@gamepark/react-game/dist/hooks/useRules'
import { Trek12Rules } from '@gamepark/trek12/Trek12Rules'
import { usePlayerId } from '@gamepark/react-game/dist/hooks/usePlayerId'
import { Memory } from '@gamepark/trek12/rules/Memory'
import { applyOperator, Operator } from '@gamepark/trek12/material/Operator'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'
import { useLegalMoves } from '@gamepark/react-game/dist/hooks/useLegalMoves'
import { isCustomMoveType } from '@gamepark/rules-api/dist/material/moves/CustomMove'
import { CustomMoveType } from '@gamepark/trek12/rules/CustomMoveType'
import { PlayMoveButton } from '@gamepark/react-game/dist/components/buttons/PlayMoveButton/PlayMoveButton'

export const ChooseResultHeader: FC = () => {
  const rules = useRules<SimultaneousRule>()!
  const player = usePlayerId()
  const moves = useLegalMoves()
  if (!player || !rules.isTurnToPlay(player)) {
    return <>Players must choose their results</>
  }

  const dice = [
    rules.material(MaterialType.YellowDice).getItem()!.location.rotation,
    rules.material(MaterialType.GreenDice).getItem()!.location.rotation + 1,
  ]

  const operand = rules.remind(Memory.Operand, player)
  if (operand) {
    return <>You must choose where to place your {applyOperator(operand, dice)}</>
  }

  const max = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MAX)
  const min = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MIN)
  const minus = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MINUS)
  const plus = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.PLUS)
  const multiply = moves.find((move) => isCustomMoveType(CustomMoveType.ChooseOperand)(move) && move.data.operator === Operator.MULTIPLY)

  return <>Choose your result
    <PlayMoveButton move={max}>Max ({applyOperator(Operator.MAX, dice)})</PlayMoveButton>
    <PlayMoveButton move={min}>Min ({applyOperator(Operator.MIN, dice)})</PlayMoveButton>
    <PlayMoveButton move={minus}>Minus ({applyOperator(Operator.MINUS, dice)})</PlayMoveButton>
    <PlayMoveButton move={plus}>Plus ({applyOperator(Operator.PLUS, dice)})</PlayMoveButton>
    <PlayMoveButton move={multiply}>Multiply ({applyOperator(Operator.MULTIPLY, dice)})</PlayMoveButton>
  </>
}
