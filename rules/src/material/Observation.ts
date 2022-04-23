import {TFunction} from 'i18next'

type Animal = {
    name:(t:TFunction) => string
    scoring:[number, number, number, number, number, number]
}

export default Animal

export const observation1:Animal = {
    name: t => t('Jaguar'),
    scoring:[0,1,2,4,7,15]
}

export const observation2:Animal = {
    name:t => t('Blue Ara'),
    scoring:[0,0,4,8,12,16]
}

export const observation3:Animal = {
    name:t => t('Toucan'),
    scoring:[2,4,6,8,10,12]
}

export const observation4:Animal = {
    name:t => t('Rainbow Boa'),
    scoring:[3,6,7,8,9,10]
}

export const observation5:Animal = {
    name:t => t('Butterfly'),
    scoring:[4,5,6,7,8,9]
}

export const observation6:Animal = {
    name:t => t('Poison Dart Frog'),
    scoring:[0,0,0,10,15,20]
}

export const observation7:Animal = {
    name:t => t('Tamarind'),
    scoring:[2,4,6,8,9,10]
}

export const observation8:Animal = {
    name:t => t('Pygmy Marmoset'),
    scoring:[6,9,11,13,15,17]
}
export const observation9:Animal = {
    name:t => t('Bird'),
    scoring:[7,8,9,10,12,15]
}

export const observation10:Animal = {
    name:t => t('Cat'),
    scoring:[1,3,6,10,15,20]
}

export const observation11:Animal = {
    name:t => t('Carnivorous Purple Plant'),
    scoring:[12,10,8,6,4,2]
}

export const observation12:Animal = {
    name:t => t('Carnivorous Blue Plant'),
    scoring:[11,10,9,8,7,6]
}

export const observation13:Animal = {
    name:t => t('Carnivorous Green Plant'),
    scoring:[20,15,10,5,1,0]
}

export const observation14:Animal = {
    name:t => t('Carnivorous Brown Plant'),
    scoring:[15,12,9,6,3,0]
}

export const basicObservation:Animal[] = [
    observation1, observation2, observation3, observation4,
    observation5, observation6, observation7, observation8, 
]

const goodiesObservation:Animal[] = [
    observation9, observation10
]

const carnivorousObservation:Animal[] = [
    observation11, observation12, observation13, observation14
]

// TODO : List to complete when you will know all the material !

const basicAndGoodies:Animal[] = basicObservation.concat(goodiesObservation)
const basicAndPlants:Animal[] = basicObservation.concat(carnivorousObservation)
const basicPlantsAndGoodies:Animal[] = basicObservation.concat(carnivorousObservation, goodiesObservation)

export enum ObservationMix {Basic=1, BasicAndPlants, BasicAndGoodies, BasicPlantsAndGooies}
export const observationsMixes = Object.values(ObservationMix).filter(isObservationMix)

function isObservationMix(arg:string|ObservationMix):arg is ObservationMix{
    return typeof arg === 'number'
}

export function getObservationMix(arg:ObservationMix):Animal[]{
    switch(arg){
        case ObservationMix.Basic: return basicObservation
        case ObservationMix.BasicAndGoodies: return basicAndGoodies
        case ObservationMix.BasicAndPlants: return basicAndPlants
        case ObservationMix.BasicPlantsAndGooies: return basicPlantsAndGoodies
    }
}