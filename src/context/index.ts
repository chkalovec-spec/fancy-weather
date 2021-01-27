import React from 'react'
import { AppActionsType } from './action'
import { appState, appStateType } from './reducer'

type AppContextType = {
  state: appStateType
  dispatch: React.Dispatch<AppActionsType>
}

export const AppContext = React.createContext<AppContextType>({
  state: appState,
  dispatch: () => null,
})
