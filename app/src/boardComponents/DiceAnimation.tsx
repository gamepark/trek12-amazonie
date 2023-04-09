/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react'
import {faDiceFive} from '@fortawesome/free-solid-svg-icons/faDiceFive'
import {faDiceFour} from '@fortawesome/free-solid-svg-icons/faDiceFour'
import {faDiceOne} from '@fortawesome/free-solid-svg-icons/faDiceOne'
import {faDiceSix} from '@fortawesome/free-solid-svg-icons/faDiceSix'
import {faDiceThree} from '@fortawesome/free-solid-svg-icons/faDiceThree'
import {faDiceTwo} from '@fortawesome/free-solid-svg-icons/faDiceTwo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useAnimation} from '@gamepark/react-client'
import {useEffect, useState} from 'react'

type Props = {
    dice:number[]
}

export default function DiceAnimation({dice}:Props) {

  return (
    <>
      {dice.map((die, index) =>
        <div key={index} css={[diePosition(index), dieSize, dieRotation]}>
          <div css={[dieStyle(index), dicesFaceCss[(1 - die + 6) % 6]]}>
          <span css={diceResultStyle}>{die}</span>
          </div>
          <div css={[dieStyle(index), dicesFaceCss[(2 - die + 6) % 6]]}>
          <span css={diceResultStyle}>{die}</span>
          </div>
          <div css={[dieStyle(index), dicesFaceCss[(3 - die + 6) % 6]]}>
          <span css={diceResultStyle}>{die}</span>
          </div>
          <div css={[dieStyle(index), dicesFaceCss[(4 - die + 6) % 6]]}>
          <span css={diceResultStyle}>{die}</span>
          </div>
          <div css={[dieStyle(index), dicesFaceCss[(5 - die + 6) % 6]]}>
          <span css={diceResultStyle}>{die}</span>
          </div>
          <div css={[dieStyle(index), dicesFaceCss[(6 - die + 6) % 6]]}>
            <span css={diceResultStyle}>{die}</span>
          </div>
        </div>
      )}
    </>
  )
}

const diceResultStyle = css`
    font-size:3em;
`

const size = 4

const diePosition = (index: number) => css`
  position: absolute;
  top: 0em;
  left: ${index === 0 ? 0.5 : 5}em;
`

const dieSize = css`
  width: ${size}em;
  height: ${size}em;
`

const dieRotationKeyFrames = (rotationVector: number[]) => keyframes`
  from {
    transform: rotate3d(${rotationVector[0]}, ${rotationVector[1]}, ${rotationVector[2]}, ${rotationVector[3]}deg);
  }
  80% {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
`

const dieRotationAnimation = (rotationVector: number[], duration: number) => css`
  animation: ${dieRotationKeyFrames(rotationVector)} ${duration}s ease-out;
`

const dieRotation = css`
  transform-style: preserve-3d;
  transform-origin: center center 2.7em;
  transform: rotate3d(0, 0, 0, 0deg);
`

const dieStyle = (i:number) => css`
  position: absolute;
  color: black;
  background-color:${i == 0 ? "#82c702" : "#fed330"};
  border-radius: 15%;
  backface-visibility: visible;
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  & > svg {
    width: 120%;
    height: 120%;
    transform: translate(-8%, -8%);
  }
`

const frontCss = css`
  transform: translateZ(${size}em);
`

const behindCss = css`
  transform: rotateX(180deg);
`

const topCss = css`
  transform: rotateX(90deg);
  transform-origin: top;
`

const bottomCss = css`
  transform: rotateX(-90deg);
  transform-origin: bottom;
`

const leftCss = css`
  transform: rotateY(-90deg);
  transform-origin: left;
`

const rightCss = css`
  transform: rotateY(90deg);
  transform-origin: right;
`

const dicesFaceCss = [frontCss, leftCss, topCss, bottomCss, rightCss, behindCss]

function getRandomRotation(): number[] {
  const maxVector: number = 10
  const minVector: number = -10

  return [Math.floor(Math.random() * (maxVector - minVector + 1)) + minVector,
    Math.floor(Math.random() * (maxVector - minVector + 1)) + minVector,
    Math.floor(Math.random() * (maxVector - minVector + 1)) + minVector,
    Math.floor(Math.random() * (3000 + 3000 + 1)) - 3000
  ]

}