/** @jsxImportSource @emotion/react */
import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const SubTotalHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isPlayer = item.location?.player === player
  const playerName = usePlayerName(item.location?.player)

  return <>
    <h2>{t(`sub.total.help.title`)}</h2>
    <p><Trans defaults={getScoringLabel(item.location?.id, isPlayer)} values={{ scoring: item.id, player: playerName }}></Trans></p>
  </>
}

const getScoringLabel = (idLabel: number, isPlayer: boolean): string => {
  switch (idLabel) {
    case 0:
      return isPlayer ? 'sub.total.observations.yours.text' : 'sub.total.observations.theirs.text'
    case 1:
      return isPlayer ? 'sub.total.observations.yours.text' : 'sub.total.pathways.theirs.text'
    case 2:
      return isPlayer ? 'sub.total.observations.yours.text' : 'sub.total.areas.theirs.text'
    case 3:
    default:
      return isPlayer ? 'sub.total.dangers.yours.text' : 'sub.total.dangers.theirs.text'

  }

}