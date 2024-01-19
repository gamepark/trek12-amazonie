/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faArrowDown, faArrowUp, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PlayMoveButton, useLegalMoves, usePlayerId, useRules } from '@gamepark/react-game'
import { isCreateItemType, isCustomMoveType, SimultaneousRule } from '@gamepark/rules-api'
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

  if (moves.find(isCreateItemType(MaterialType.Path))) {
    return <><Trans defaults="header.player.choose.path"></Trans></>
  }

  const dice = [
    rules.material(MaterialType.YellowDice).getItem()!.location.rotation,
    rules.material(MaterialType.GreenDice).getItem()!.location.rotation + 1
  ]

  const operand = rules.remind(Memory.Operand, player)
  if (operand) {
    return <><Trans defaults="header.you.choose.node" values={{ result: applyOperator(operand, dice) }}></Trans></>
  }

  const max = moves.find((move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MAX)
  const min = moves.find((move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MIN)
  const minus = moves.find((move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MINUS)
  const plus = moves.find((move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.PLUS)
  const multiply = moves.find((move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MULTIPLY)

  return <>{t(`header.you.choose.operand`)}
    <PlayMoveButton move={min}><FontAwesomeIcon icon={faArrowDown}/> <span css={alignCss}> ({applyOperator(Operator.MIN, dice)}) </span></PlayMoveButton>
    <PlayMoveButton move={max}><FontAwesomeIcon icon={faArrowUp}/> <span css={alignCss}>({applyOperator(Operator.MAX, dice)}) </span> </PlayMoveButton>
    <PlayMoveButton move={minus}> <FontAwesomeIcon icon={faMinus}/> <span css={alignCss}> ({applyOperator(Operator.MINUS, dice)})  </span></PlayMoveButton>
    <PlayMoveButton move={plus}> <FontAwesomeIcon icon={faPlus}/> <span css={alignCss}> ({applyOperator(Operator.PLUS, dice)}) </span> </PlayMoveButton>
    <PlayMoveButton move={multiply}> <FontAwesomeIcon icon={faTimes}/> <span css={alignCss}> ({applyOperator(Operator.MULTIPLY, dice)})</span> </PlayMoveButton>
  </>
}

const alignCss = css`
  vertical-align:0.125em;
`