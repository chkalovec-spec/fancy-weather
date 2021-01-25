import styled, { css } from 'styled-components'
import { Flex } from 'lib/Flex'

type InputProps = {
  placeholder?: string
  icon?: string
  borderRight?: string
  borderLeft?: string
}

const StyledInput = styled.input<InputProps>`
  padding: ${({ theme: { size } }) => size.md.padding};
  height: ${({ theme: { size } }) => size.md.height};

  border: ${({ theme: { colors } }) => `1px solid ${colors.divider}`};
  border-radius: 5px;
  outline: none;

  color: ${({ theme: { colors } }) => colors.white};
  background-color: transparent;

  ::placeholder {
    color: ${({ theme: { colors } }) => colors.white};
  }
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

const StyledInputIcon = styled.img.attrs<InputProps>(({ src }) => ({
  src,
}))`
  position: absolute;
  right: 10px;

  cursor: pointer;
`

export const Input: React.FC<InputProps> = ({ children, icon, ...props }) => {
  return (
    <>
      <Flex pos='relative'>
        <StyledInput {...props} />
        {icon && <StyledInputIcon src={icon} />}
      </Flex>
    </>
  )
}
