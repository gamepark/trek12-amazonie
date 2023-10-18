/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PictureAttributes } from '@gamepark/react-game'
import { ExplorationCard } from '@gamepark/trek12/material/ExplorationCard'
import Images from '../images/Images'

type Props = {
} & PictureAttributes

export default function AnimalCard(){
        // const playerId = usePlayerId<number>()
        // return (
        //     isNotObservationView(animal)
        //         ? <Picture src={getAnimalPicture(animal.animal)} css={style} {...props}/>
        //         : <Picture src={Images.animalBack} css={style} {...props}/>
        //
        // )
    return null
}

function getAnimalPicture(animal:ExplorationCard):string{
    switch(animal){
        case ExplorationCard.Ara: return Images.ara
        case ExplorationCard.Butterfly: return Images.butterfly
        case ExplorationCard.Jaguar: return Images.jaguar
        case ExplorationCard.PoisonDartFrog: return Images.poisonDartFrog
        case ExplorationCard.PygmyMarmoset: return Images.oustiti
        case ExplorationCard.RainbowBoa: return Images.aecSnake
        case ExplorationCard.Tamarind: return Images.tamarin
        case ExplorationCard.Toucan: return Images.toucan
        default : return Images.animalBack
    }
}

const style = css`

    width:100%;
    height:100%;
`