import GameLocalView from "src/GameLocalView"

export const SET_SELECTED_SPOT = 'SetSelectedSpot'
export const RESET_SELECTED_SPOT = 'ResetSelectedSpot'

export default interface SetSelectedSpot {
    type:typeof SET_SELECTED_SPOT
    spot:number
}

export interface ResetSelectedSpot {
    type:typeof RESET_SELECTED_SPOT
}

export const setSelectedSpotMove = (spot:number):SetSelectedSpot =>({
    type:SET_SELECTED_SPOT, spot
})

export const resetSelectedSpotMove = ():ResetSelectedSpot =>({
    type:RESET_SELECTED_SPOT
})

export function setSelectedSpot(state:GameLocalView, move:SetSelectedSpot){
    state.selectedSpot = state.selectedSpot === move.spot ? undefined :  move.spot
}

export function resetSelectedSpot(state:GameLocalView){
    delete state.selectedSpot
}