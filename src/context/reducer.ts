import { AppActions, AppActionsType } from './action'

export type appStateType = {
  coords: {
    latitude: number | null
    longitude: number | null
  }
}

export const appState: appStateType = {
  coords: {
    latitude: null,
    longitude: null,
  },
}

export const appReducer = (state = appState, action: AppActionsType): appStateType => {
  switch (action.type) {
    case AppActions.SET_COORDS: {
      return {
        ...state,
        coords: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      }
    }
    default:
      return state
  }
}
