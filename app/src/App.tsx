/** @jsxImportSource @emotion/react */
import { FailuresDialog, FullscreenDialog, LoadingScreen, MaterialHeader, MaterialImageLoader, Menu, useGame } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { RuleId } from '@gamepark/trek12-amazonie/rules/RuleId'
import { FC, useEffect, useState } from 'react'
import { GameDisplay } from './GameDisplay'
import { ChooseResultHeader } from './header/ChooseResultHeader'
import { RollDiceHeader } from './header/RollDiceHeader'

export default function App() {
  const game = useGame<MaterialGame>()
  const [imagesLoading, setImagesLoading] = useState(true)
  const [isJustDisplayed, setJustDisplayed] = useState(true)
  useEffect(() => {
    setTimeout(() => setJustDisplayed(false), 2000)
  }, [])
  const loading = !game || imagesLoading || isJustDisplayed
  return (
    <>
      { !!game && <GameDisplay players={game.players.length} /> }
      <LoadingScreen display={loading} author="Aske Christiansen" artist="Apolline Etienne" publisher="Ludonaute" developer="Laetitia Decoudu" />
      <MaterialImageLoader onImagesLoad={() => setImagesLoading(false)} />
      <MaterialHeader rulesStepsHeaders={headers} />
      <Menu />
      <FailuresDialog />
      <FullscreenDialog />
    </>
  )
}

const headers: Partial<Record<RuleId, FC>> = {
  [RuleId.ChooseResult]: ChooseResultHeader,
  [RuleId.RollDice]: RollDiceHeader
}
