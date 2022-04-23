import shuffle from 'lodash.shuffle'

export const bigDice:[number, number, number, number, number, number] = [1,2,3,4,5,6]
export const smallDice:[number, number, number, number, number, number] = [0,1,2,3,4,5]

function rollDice():[number, number]{
    return [shuffle(bigDice)[0], shuffle(smallDice)[0]]
}

export default rollDice