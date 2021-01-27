import { useReducer } from 'react'

import { appReducer, appState } from 'context/reducer'
import { AppContext } from 'context'

import { WeatherBlockContainer } from 'containers/WeatherBlock'
import { TitleBlockContainer } from 'containers/TitleBlock'
import { Header } from 'components/Header'
import { Container } from 'lib/Container'

function App() {
  const [state, dispatch] = useReducer(appReducer, appState)

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Container mw='xl'>
          <Header />
          <TitleBlockContainer />
          <WeatherBlockContainer />
        </Container>
      </AppContext.Provider>
    </>
  )
}

export default App
