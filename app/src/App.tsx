/** @jsxImportSource @emotion/react */
import GameView from '@gamepark/trek12/GameView'
import { FC, useEffect, useState } from 'react'
import { GameDisplay } from './GameDisplay'
import { MaterialImageLoader, FailuresDialog, FullscreenDialog, Menu, useGame, MaterialHeader, LoadingScreen } from '@gamepark/react-game'
import { RuleId } from '@gamepark/trek12/rules/RuleId'

export default function App() {
  const game = useGame<GameView>()
  const [imagesLoading, setImagesLoading] = useState(true)
  const [isJustDisplayed, setJustDisplayed] = useState(true)
  useEffect(() => {
    setTimeout(() => setJustDisplayed(false), 2000)
  }, [])
  const loading = !game || imagesLoading || isJustDisplayed
  return (
    <>
      <GameDisplay />
      <LoadingScreen display={loading} author="Aske Christiansen" artist="Apolline Etienne" publisher="Ludonaute" developer="Laetitia Decoudu" />
      <MaterialImageLoader onImagesLoad={() => setImagesLoading(false)} />
      <MaterialHeader rulesStepsHeaders={headers} />
      <Menu />
      <FailuresDialog />
      <FullscreenDialog />
    </>
  )
}

const headers: Partial<Record<RuleId, FC>> = {}