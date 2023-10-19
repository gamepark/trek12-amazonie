import { isEnumValue } from '@gamepark/rules-api'

export enum ExplorationCard {
    Jaguar = 1,
    Ara,
    Toucan,
    RainbowBoa,
    Butterfly,
    PoisonDartFrog,
    Tamarind,
    PygmyMarmoset,
    //Bird,
    //Cat,
    //CarnivorousPlant
}
export const explorationCards =  Object.values(ExplorationCard).filter(isEnumValue)

export const ExplorationCardScores: Record<ExplorationCard, number[]> = {
    [ExplorationCard.Jaguar]: [0,1,2,4,7,15],
    [ExplorationCard.Ara]: [0,0,4,8,12,16],
    [ExplorationCard.Toucan]: [2,4,6,8,10,12],
    [ExplorationCard.RainbowBoa]: [3,6,7,8,9,10],
    [ExplorationCard.Butterfly]: [4,5,6,7,8,9],
    [ExplorationCard.PoisonDartFrog]: [0,0,0,10,15,20],
    [ExplorationCard.Tamarind]: [2,4,6,8,9,10],
    [ExplorationCard.PygmyMarmoset]: [6,9,11,13,15,17],
    //[ExplorationCard.Bird]: [7,8,9,10,12,15],
    //[ExplorationCard.Cat]: [1,3,6,10,15,20],
    //[ExplorationCard.CarnivorousPlant]: [12,10,8,6,4,2],
}
//
//
// type Animal = {
//     name:ExplorationCard
//     scoring:[number, number, number, number, number, number]
// }
//
// export const observation4:Animal = {
//     name: ExplorationCard.RainbowBoa,
//     scoring:[3,6,7,8,9,10]
// }
//
// export const observation5:Animal = {
//     name: ExplorationCard.Butterfly,
//     scoring:[4,5,6,7,8,9]
// }
//
// export const observation6:Animal = {
//     name: ExplorationCard.PoisonDartFrog,
//     scoring:[0,0,0,10,15,20]
// }
//
// export const observation7:Animal = {
//     name: ExplorationCard.Tamarind,
//     scoring:[2,4,6,8,9,10]
// }
//
// export const observation8:Animal = {
//     name: ExplorationCard.PygmyMarmoset,
//     scoring:[6,9,11,13,15,17]
// }
// export const observation9:Animal = {
//     name: ExplorationCard.Bird,
//     scoring:[7,8,9,10,12,15]
// }
//
// export const observation10:Animal = {
//     name: ExplorationCard.Cat,
//     scoring:[1,3,6,10,15,20]
// }
//
// export const observation11:Animal = {
//     name: ExplorationCard.CarnivorousPlant,
//     scoring:[12,10,8,6,4,2]
// }
//
// export const observation12:Animal = {
//     name: ExplorationCard.CarnivorousPlant,
//     scoring:[11,10,9,8,7,6]
// }
//
// export const observation13:Animal = {
//     name: ExplorationCard.CarnivorousPlant,
//     scoring:[20,15,10,5,1,0]
// }
//
// export const observation14:Animal = {
//     name: ExplorationCard.CarnivorousPlant,
//     scoring:[15,12,9,6,3,0]
// }
//
// export const basicObservation:Animal[] = [
//     /*observation1, observation2, observation3, */observation4,
//     observation5, observation6, observation7, observation8,
// ]
//
// const goodiesObservation:Animal[] = [
//     observation9, observation10
// ]
//
// const carnivorousObservation:Animal[] = [
//     observation11, observation12, observation13, observation14
// ]
//
// // TODO : List to complete when you will know all the material !
//
// const basicAndGoodies:Animal[] = basicObservation.concat(goodiesObservation)
// const basicAndPlants:Animal[] = basicObservation.concat(carnivorousObservation)
// const basicPlantsAndGoodies:Animal[] = basicObservation.concat(carnivorousObservation, goodiesObservation)
//
// export enum ObservationMix {Basic=1, BasicAndPlants, BasicAndGoodies, BasicPlantsAndGooies}
// export const observationsMixes = Object.values(ObservationMix).filter(isObservationMix)
//
// function isObservationMix(arg:string|ObservationMix):arg is ObservationMix{
//     return typeof arg === 'number'
// }
//
// export function getObservationMix(arg:ObservationMix):Animal[]{
//     switch(arg){
//         case ObservationMix.Basic: return basicObservation
//         case ObservationMix.BasicAndGoodies: return basicAndGoodies
//         case ObservationMix.BasicAndPlants: return basicAndPlants
//         case ObservationMix.BasicPlantsAndGooies: return basicPlantsAndGoodies
//     }
// }

