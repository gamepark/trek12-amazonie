/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react'
import GameView from '@gamepark/trek12/GameView'
import {Letterbox, Picture} from '@gamepark/react-components'
import Images from './images/Images'
import Jungle from './boardComponents/Jungle'
import DicePath from './boardComponents/DicePath'
import { usePlayerId } from '@gamepark/react-client'
import { useMemo } from 'react'
import PlayerPanel from './boardComponents/PlayerPanel'
import AnimalCard from './boardComponents/AnimalCard'
import AnimalNumberCard from './boardComponents/AnimalNumberCard'
import GameLocalView from './GameLocalView'
import { isNotObservationView } from '@gamepark/trek12/GameState'
import { getObservationMix, ObservationMix } from '@gamepark/trek12/material/Observation'

type Props = {
  game: GameLocalView
}

export default function GameDisplay({game}: Props) {
  const playerId = usePlayerId<number>()
  const players = useMemo(() => getPlayersStartingWith(game, playerId), [game, playerId])

  return (
    <Letterbox css={letterBoxStyle} top={0}>
      <div css={sampleCss}>
        
        <Jungle player={players[0]} selectedSpot={game.selectedSpot} selectedOperand={game.selectedOperand} />

        {game.observation.map((obs, index) => 
        
          <div key={index} css={discoveringValueStyle(index)}>
            <div>{obs.discoveringValue}</div>
            {isNotObservationView(obs) && <div> 
              {getObservationMix(ObservationMix.BasicPlantsAndGooies)[obs.animal].scoring.map((score, i) =>
                <div key={i} css={[i<players[0].observationsMade[index].discoveringCount && isValidated]} >{score} </div>
              )}
            </div>}
          </div>

        )}

        {Array.from({length: players[0].operationTab.smallDigit}).map((_, index) => 
            <div key={index} css={boxOperandStyle(index, 0)}></div>
        )}
        {Array.from({length: players[0].operationTab.highDigit}).map((_, index) => 
            <div key={index} css={boxOperandStyle(index, 1)}></div>
        )}
        {Array.from({length: players[0].operationTab.minusOperand}).map((_, index) => 
            <div key={index} css={boxOperandStyle(index, 2)}></div>
        )}
        {Array.from({length: players[0].operationTab.addOperand}).map((_, index) => 
            <div key={index} css={boxOperandStyle(index, 3)}></div>
        )}
        {Array.from({length: players[0].operationTab.timeOperand}).map((_, index) => 
            <div key={index} css={boxOperandStyle(index, 4)}></div>
        )}

        {game.observation.map((animal, index) => 
             <AnimalCard animal={animal} key={index} css={animalCardStyle(index)}/>
        )}
        {game.observation.map((animal, index) => 
             <AnimalNumberCard discoveringValue={animal.discoveringValue} key={index} css={animalNumberCardStyle(index)}/>
        )}

        <div css={scrollStyle}>
          {players.map((player, index) => 
            <PlayerPanel key={index}
                        player={player}
                        position={index}/>
          )}
        </div>
        <DicePath dice={game.dice} player={players[0]} operandSelected={game.selectedOperand} selectedSpot={game.selectedSpot} />

      </div>
    </Letterbox>
  )
}

export const getPlayersStartingWith = (game: GameView, playerId?: number) => {
  if (playerId) {
    return [...game.players.slice(playerId, game.players.length), ...game.players.slice(0, playerId)]
  } else {
    return game.players
  }
}

const scrollStyle=css`
position:absolute;
top:0;
right:0;
width:25%;
height:93%;
overflow-y:scroll;
`

const animalCardRatio = 793/1088
const animalCardHeight = 12.7
const animalCardWidth = animalCardHeight*animalCardRatio
const animalCardStyle = (index:number) => css`
    position:absolute;
    width:${animalCardWidth}em;
    height:${animalCardHeight}em;
    top:${5 + index*animalCardHeight}em;
    left:50%;
    z-index:2;
`

const animalNumberCardRatio = 793/1088
const animalNumberCardHeight = 7
const animalNumberCardWidth = animalNumberCardHeight*animalNumberCardRatio
const animalNumberCardStyle = (index:number) => css`
    position:absolute;
    width:${animalNumberCardWidth}em;
    height:${animalNumberCardHeight}em;
    top:${8 + index*animalNumberCardHeight*1.8}em;
    left:59%;
    z-index:1;
`

const fadeIn = keyframes`
  from, 50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const letterBoxStyle = css`
  animation: ${fadeIn} 3s ease-in forwards;
`

const sampleCss = css`
  position: absolute;
  top: 7%;
  left: 0%;
  width:100%;
  height:93%;
  font-size:2em;
`

const boxOperandStyle = (x:number,y:number) => css`
    width:1.75em;
    height:1.75em;
    position:absolute;
    top:${24.8+y*1.75}em;
    left:${33.9+x*1.75}em;
    background-color:grey;
`

const discoveringValueStyle = (y:number) => css`
  position:absolute;
  left:3.2em;
  top:${y*2.84+29.4}em;
  height:2em;
  width:13.6em;

  & > div:nth-of-type(1){
    position:absolute;
    left:0.2em;
    top:-0.1em;
    font-size:2em;
    color:black;
  }
  & > div:nth-of-type(2){
    position:absolute;
    right:0.2em;
    width:75%;
    height:100%;
    top:0.1em;
    color:black;
    display:flex;
    align-items:center;
    justify-content:end;
    & > div {
      width:2em;
      font-size:1.6em;
      text-align: center;
    }
  }
`

const isValidated = css`
  border:0.1em solid black;
  border-radius:100%;
`