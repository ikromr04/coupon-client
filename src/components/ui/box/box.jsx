import { StyledBox } from './styled'

function Box({ children, className, tagName, ...rest }) {
  return (
    <StyledBox
      className={className}
      as={tagName}
      {...rest}
    >
      {children}
    </StyledBox>
  )
}

export default Box
