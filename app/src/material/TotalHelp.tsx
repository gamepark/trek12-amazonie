/** @jsxImportSource @emotion/react */
import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const TotalHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isPlayer = item.location?.player === player
  const playerName = usePlayerName(item.location?.player)

  return <>
    <h2>{t(`total.help.title`)}</h2>
    {isPlayer
      ? <p><Trans defaults="total.help.yours.text" values={{ scoring: item.id }}></Trans></p>
      : <p><Trans defaults="total.help.theirs.text" values={{ scoring: item.id, player: playerName }}></Trans></p>
    }
  </>
}