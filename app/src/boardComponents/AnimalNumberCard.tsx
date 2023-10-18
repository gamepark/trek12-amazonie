/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Picture, PictureAttributes } from '@gamepark/react-game'
import Images from '../images/Images'

type Props = {
    discoveringValue:(number)
} & PictureAttributes

export default function AnimalNumberCard({discoveringValue, ...props}:Props){
    return (
        <Picture src={getNumberPicture(discoveringValue)} css={style} {...props}/>
    )
}

function getNumberPicture(value:number):string{
    switch(value){
        case 0: return Images.animalNumber0
        case 1: return Images.animalNumber1
        case 2: return Images.animalNumber2
        case 3: return Images.animalNumber3
        case 4: return Images.animalNumber4
        case 5: return Images.animalNumber5
        case 6: return Images.animalNumber6
        default : return Images.animalNumberBack
    }
}

const style = css`

    width:100%;
    height:100%;
`