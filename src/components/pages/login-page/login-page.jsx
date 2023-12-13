import { useState } from 'react'
import { APIRoute, AppRoute, AuthorizationStatus } from '../../../const'
import { useFormValidation } from '../../../hooks/use-form-validation'
import { createAPI } from '../../../services/api'
import Button from '../../ui/button/button'
import Input from '../../ui/input/input'
import Spinner from '../../ui/spinner/spinner'
import Text from '../../ui/text/text'
import { Form, Main, Wrapper } from './styled'
import { saveToken } from '../../../services/token'
import { Navigate } from 'react-router-dom'

function LoginPage({ authStatus, setAuthStatus }) {
  const api = createAPI()
  const { validationError, setValidationError, formChangeHandler } = useFormValidation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    setIsSubmitting(true)
    api.post(APIRoute.Login, { email, password })
      .then(({ data }) => {
        saveToken(data.token)
        setAuthStatus(AuthorizationStatus.Auth)
        setIsSubmitting(false)
      })
      .catch((error) => {
        setValidationError(error?.response?.data)
        setIsSubmitting(false)
      })
  }

  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />
  }

  return (
    <Main>
      <Wrapper>

        <Form onSubmit={handleFormSubmit} onChange={formChangeHandler}>
          <Text error={validationError?.message ? true : false}>
            {validationError?.message 
              ? 'Неверные учетные данные' 
              : 'Введите свои учетные данные'}
          </Text>

          <Input
            name="email"
            type="text"
            placeholder="Логин"
            defaultValue={email}
            onChange={(evt) => setEmail(evt.target.value)}
            errorMessage={validationError?.errors?.email?.[0]}
          />

          <Input
            name="password"
            type="password"
            placeholder="Пароль"
            defaultValue={password}
            onChange={(evt) => setPassword(evt.target.value)}
            errorMessage={validationError?.errors?.password?.[0]}
          />

          <Button
            type="submit"
            success
            disabled={isSubmitting}
          >
            {isSubmitting && <Spinner />}
            Войти в систему
          </Button>
        </Form>
      </Wrapper>
    </Main>
  )
}

export default LoginPage
