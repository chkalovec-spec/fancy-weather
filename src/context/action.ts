import { appStateType } from './reducer'

export enum AppActions {
  SET_COORDS = 'SET_COORDS',
}

type SetCoordsType = {
  type: AppActions.SET_COORDS
  payload: appStateType['coords']
}

export const setCoords = (payload: appStateType['coords']): SetCoordsType => ({
  type: AppActions.SET_COORDS,
  payload,
})

export type AppActionsType = SetCoordsType
