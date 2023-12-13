import { StyledButton } from './styled'
import { Link } from 'react-router-dom'

function Button({
  children,
  className,
  href,
  success,
  warning,
  error,
  large,
  small,
  ...rest
}) {
  return (
    <StyledButton
      className={className}
      as={href ? Link : ''}
      to={href}
      success={success}
      warning={warning}
      error={error}
      large={large}
      small={small}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button
