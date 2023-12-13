import { Navigate } from 'react-router-dom'
import { APIRoute, AppRoute, AuthorizationStatus } from '../../../const'
import { Form, LogoutButton, Main, Wrapper } from './styled'
import { createAPI } from '../../../services/api'
import { dropToken } from '../../../services/token'
import { useFormValidation } from '../../../hooks/use-form-validation'
import { useState } from 'react'
import Button from '../../ui/button/button'
import Spinner from '../../ui/spinner/spinner'
import Input from '../../ui/input/input'
import Text from '../../ui/text/text'

function MainPage({ authStatus, setAuthStatus }) {
  const api = createAPI()
  const { validationError, setValidationError, formChangeHandler } = useFormValidation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [coupon, setCoupon] = useState('')
  const [fail, setFail] = useState('')
  const [success, setSuccess] = useState('')

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    setIsSubmitting(true)
    api.put(APIRoute.Coupons, { coupon })
      .then(() => {
        setSuccess('Купон успешно применен!')
        setIsSubmitting(false)
      })
      .catch((error) => {
        setSuccess('')
        if (error.response.status === 404 || error.response.status === 409) {
          setFail(error.response.data.message)
        } else {
          setValidationError(error?.response?.data)
        }
        setIsSubmitting(false)
      })
  }

  const handleLogoutClick = () => {
    api.delete(APIRoute.Logout)
      .then(() => {
        dropToken()
        setAuthStatus(AuthorizationStatus.NoAuth)
      });
  }

  if (authStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />
  }

  return (
    <Main>
      <LogoutButton type="button" onClick={handleLogoutClick}>
        Выйти
      </LogoutButton>

      <Wrapper>
        <Form onSubmit={handleFormSubmit} onChange={formChangeHandler}>
          <Text
            error={fail}
            success={success}
          >
            {fail}
            {success}
            {!fail && !success && 'Введите номер купона'}
          </Text>

          <Input
            name="coupon"
            type="text"
            placeholder="123456"
            defaultValue={coupon}
            onChange={(evt) => {
              setCoupon(evt.target.value)
              setFail('')
              setSuccess('')
            }}
            errorMessage={validationError?.errors?.coupon?.[0]}
          />

          <Button
            type="submit"
            success
            disabled={isSubmitting}
          >
            {isSubmitting && <Spinner />}
            Применять
          </Button>
        </Form>
      </Wrapper>
    </Main>
  )
}

export default MainPage
