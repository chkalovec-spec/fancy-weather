import { Container } from 'lib/Container'
import { Header } from 'components/Header'
import { TitleBlockContainer } from 'containers/TitleBlock'

function App() {
  return (
    <>
      <Container mw='xl'>
        <Header />
        <TitleBlockContainer />
      </Container>
    </>
  )
}

export default App
