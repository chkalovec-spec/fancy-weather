import { Button } from 'components/Button'

import RefreshIcon from 'assets/refreshIcon.png'
import RefreshIconBg from 'assets/refreshIconBg.svg'
import arrowIcon from 'assets/arrowIcon.svg'
import { theme } from 'styles/theme'

function App() {
  return (
    <>
      <Button bgImage={RefreshIconBg} bgColor={theme.colors.grayLight}>
        <img src={RefreshIcon} alt='обновить' />
      </Button>
      <Button>
        EN
        <img src={arrowIcon} alt='arrow' />
      </Button>
      <Button bgColor={theme.colors.grayDark}>°F</Button>
      <Button>°С</Button>
    </>
  )
}

export default App
