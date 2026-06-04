import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'

export const PathwayScoreHelp = ({ item }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const isPlayer = item.location?.player === player
  const playerName = usePlayerName(item.location?.player)

  return <>
    <h2>{t(`pathway.score.help.title`)}</h2>
    {isPlayer
      ? <p><Trans i18nKey="pathway.score.yours.text" values={{ scoring: item.id }}></Trans></p>
      : <p><Trans i18nKey="pathway.score.theirs.text" values={{ scoring: item.id, player: playerName }}></Trans></p>
    }
  </>
}