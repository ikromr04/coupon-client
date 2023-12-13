import { StyledText } from './styled'

function Text({
  children,
  className,
  tagName,
  small,
  large,
  success,
  warning,
  error,
}) {
  return (
    <StyledText
      className={className}
      as={tagName}
      small={small}
      large={large}
      success={success}
      warning={warning}
      error={error}
    >
      {children}
    </StyledText>
  )
}

export default Text
