import styled from 'styled-components'

type ButtonProps = {
  bgColor?: string
  textColor?: string
  bgImage?: React.ReactNode
  onClickHandler?: (args: any) => void
}

const StyledButton = styled.button<ButtonProps>`
  padding: 15px;
  height: 45px;

  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: ${({ theme }) => theme.lineHeight.md};

  border-radius: 5px;
  border: none;
  outline: none;

  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.gray};
  background-image: ${({ bgImage, theme }) => `url(${bgImage})` || theme.colors.gray};
  color: ${({ textColor, theme }) => textColor || theme.colors.white};
`
export const Button: React.FC<ButtonProps> = ({ onClickHandler, children, ...props }) => {
  return (
    <>
      <StyledButton {...props} onClick={onClickHandler}>
        {children}
      </StyledButton>
    </>
  )
}
