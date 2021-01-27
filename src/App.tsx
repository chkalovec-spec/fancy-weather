import { Container } from 'lib/Container'
import { Header } from 'components/Header'
import { TitleBlockContainer } from 'containers/TitleBlock'
import { WeatherBlockContainer } from 'containers/WeatherBlock'

function App() {
  return (
    <>
      <Container mw='xl'>
        <Header />
        <TitleBlockContainer />
        <WeatherBlockContainer />
      </Container>
    </>
  )
}

export default App
