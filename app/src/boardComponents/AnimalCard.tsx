/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePlayerId } from "@gamepark/react-client";
import { Picture, PictureAttributes } from "@gamepark/react-components";
import { isNotObservationView, isObservationView, Observation, ObservationView } from "@gamepark/trek12/GameState";
import Animal, { AnimalEnum } from "@gamepark/trek12/material/Observation";
import { t } from "i18next";
import Images from "../images/Images";

type Props = {
    animal:(ObservationView|Observation)
} & PictureAttributes

export default function AnimalCard({animal, ...props}:Props){
    const playerId = usePlayerId<number>()
    return (
        isNotObservationView(animal)
            ? <Picture src={getAnimalPicture(animal.animal)} css={style} {...props}/>
            : <Picture src={Images.animalBack} css={style} {...props}/>
        
    )
}

function getAnimalPicture(animal:AnimalEnum):string{
    switch(animal){
        case AnimalEnum.Ara: return Images.ara
        case AnimalEnum.Butterfly: return Images.butterfly
        case AnimalEnum.Jaguar: return Images.jaguar
        case AnimalEnum.PoisonDartFrog: return Images.poisonDartFrog
        case AnimalEnum.PygmyMarmoset: return Images.oustiti
        case AnimalEnum.RainbowBoa: return Images.aecSnake
        case AnimalEnum.Tararind: return Images.tamarin
        case AnimalEnum.Toucan: return Images.toucan
        default : return Images.animalBack
    }
}

const style = css`

    width:100%;
    height:100%;
`