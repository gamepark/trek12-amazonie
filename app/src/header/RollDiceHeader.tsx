import { useLegalMoves, usePlayerId, useRules } from '@gamepark/react-game'
import { SimultaneousRule } from '@gamepark/rules-api'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const RollDiceHeader: FC = () => {
  const { t } = useTranslation()
  return <>{t(`header.dice.rolling`)}</>
}
