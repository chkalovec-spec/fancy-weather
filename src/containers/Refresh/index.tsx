import { Button } from 'lib/Button'
import RefreshIconBg from 'assets/refreshIconBg.svg'
import RefreshIcon from 'assets/refreshIcon.png'

export const RefreshContainer: React.FC = () => {
  return (
    <>
      <Button bgImage={RefreshIconBg} bgColor='grayLight'>
        <img src={RefreshIcon} alt='обновить' />
      </Button>
    </>
  )
}
