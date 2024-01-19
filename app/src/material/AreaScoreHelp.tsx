/** @jsxImportSource @emotion/react */
import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const AreaScoreHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isPlayer = item.location?.player === player
  const playerName = usePlayerName(item.location?.player)

  return <>
    <h2>{t(`area.score.help.title`)}</h2>
    {isPlayer
      ? <p><Trans defaults="area.score.yours.text" values={{ scoring: item.id }}></Trans></p>
      : <p><Trans defaults="area.score.theirs.text" values={{ scoring: item.id, player: playerName }}></Trans></p>
    }

  </>
}