import shuffle from 'lodash.shuffle'
import { Operand } from '../PlayerState'

export const bigDice:[number, number, number, number, number, number] = [1,2,3,4,5,6]
export const smallDice:[number, number, number, number, number, number] = [0,1,2,3,4,5]

function rollDice():[number, number]{
    return [shuffle(bigDice)[0], shuffle(smallDice)[0]]
}

export default rollDice

export function getDiceResultWithOperand(operand:Operand, dice:number[]):number{
    switch(operand){
        case Operand.small: return Math.min(...dice)
        case Operand.high: return Math.max(...dice)
        case Operand.minus: return Math.max(...dice) - Math.min(...dice)
        case Operand.add: return dice.reduce((pv, cv) => pv + cv, 0)
        case Operand.time: return dice.reduce((pv, cv) => pv * cv, 1)
    }
}