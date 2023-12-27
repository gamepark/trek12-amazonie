import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const RollDiceHeader: FC = () => {
  const { t } = useTranslation()
  return <>{t(`header.dice.rolling`)}</>
}
