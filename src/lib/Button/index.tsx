import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

type ButtonProps = {
  onClick?: (args: any) => void
  bgColor?: keyof typeof theme.colors
  bgImage?: React.ReactNode | null
  border?: string
  borderRight?: string
  borderLeft?: string
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ theme: { size } }) => size.md.padding};
  height: ${({ theme: { size } }) => size.md.height};

  display: flex;
  align-items: center;

  border-radius: 5px;
  border: none;
  outline: none;

  text-transform: uppercase;
  cursor: pointer;

  background-color: ${({ bgColor, theme: { colors } }) => colors[bgColor!] || colors.gray};
  background-image: ${({ bgImage, theme: { colors } }) => `url(${bgImage})` || colors.gray};

  ${({ borderLeft }) =>
    borderLeft &&
    css`
      border-top-left-radius: ${borderLeft}px;
      border-bottom-left-radius: ${borderLeft}px;
    `}
  ${({ borderRight }) =>
    borderRight &&
    css`
      border-top-right-radius: ${borderRight}px;
      border-bottom-right-radius: ${borderRight}px;
    `}
`
export const Button: React.FC<ButtonProps> = ({ onClick: onClickHandler, children, ...props }) => {
  return (
    <>
      <StyledButton {...props} onClick={onClickHandler}>
        {children}
      </StyledButton>
    </>
  )
}
