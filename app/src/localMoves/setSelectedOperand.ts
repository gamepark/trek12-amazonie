import { Operand } from "@gamepark/trek12/PlayerState"
import GameLocalView from "src/GameLocalView"

export const SET_SELECTED_OPERAND = 'SetSelectedOperand'
export const RESET_SELECTED_OPERAND = 'ResetSelectedOperand'

export default interface SetSelectedOperand {
    type:typeof SET_SELECTED_OPERAND
    operand:Operand
}

export interface ResetSelectedOperand {
    type:typeof RESET_SELECTED_OPERAND
}

export const setSelectedOperandMove = (operand:Operand):SetSelectedOperand =>({
    type:SET_SELECTED_OPERAND, operand
})

export const resetSelectedOperandMove = ():ResetSelectedOperand =>({
    type:RESET_SELECTED_OPERAND
})

export function setSelectedOperand(state:GameLocalView, move:SetSelectedOperand){
    state.selectedOperand = state.selectedOperand === move.operand ? undefined :  move.operand
}

export function resetSelectedOperand(state:GameLocalView){
    delete state.selectedOperand
}