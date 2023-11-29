/** @jsxImportSource @emotion/react */
import { usePlayerId } from '@gamepark/react-game'
import { getPlayerName } from '@gamepark/trek12/Trek12Options'
import { useTranslation } from 'react-i18next'

type Props = {
  loading: boolean
}

export default function HeaderText({loading}: Props) {
  const {t} = useTranslation()
  const playerId = usePlayerId()
  if (loading) return <>{t('Game loading...')}</>
  return <>Loaded! Now what? Your player id is {getPlayerName(playerId, t)}</>
}
