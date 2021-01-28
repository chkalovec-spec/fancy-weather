import { useEffect, useReducer } from 'react'
import { useGeolocation } from 'react-use'

import { appReducer, appState } from 'context/reducer'
import { setCoords } from 'context/action'
import { AppContext } from 'context'

import { WeatherBlockContainer } from 'containers/WeatherBlock'
import { TitleBlockContainer } from 'containers/TitleBlock'
import { Header } from 'components/Header'
import { Container } from 'lib/Container'

function App() {
  const [state, dispatch] = useReducer(appReducer, appState)
  const { latitude, longitude } = useGeolocation()

  useEffect(() => {
    dispatch(setCoords({ latitude, longitude }))
  }, [latitude, longitude])

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
