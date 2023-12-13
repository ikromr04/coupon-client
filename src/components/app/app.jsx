import { useEffect, useState } from 'react'
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const'
import Spinner from '../ui/spinner/spinner'
import { AppSpinner } from './styled'
import { createAPI } from '../../services/api'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/login-page/login-page'
import MainPage from '../pages/main-page/main-page'
import { saveToken } from '../../services/token'

function App() {
  const api = createAPI()
  const [authStatus, setAuthStatus] = useState(AuthorizationStatus.Unknown)
  
  useEffect(() => {
    if (authStatus === AuthorizationStatus.Unknown) {
      api.get(APIRoute.Login)
      .then(({ data }) => {
        saveToken(data?.token)
        setAuthStatus(AuthorizationStatus.Auth)
      })
      .catch(() => setAuthStatus(AuthorizationStatus.NoAuth))
    }
  }, [api])

  if (authStatus === AuthorizationStatus.Unknown) {
    return (
      <AppSpinner>
        <Spinner width={56} height={56} />
      </AppSpinner>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path={AppRoute.Login} 
          element={<LoginPage authStatus={authStatus} setAuthStatus={setAuthStatus} />} 
        />
        <Route 
          path={AppRoute.Main} 
          element={<MainPage authStatus={authStatus} setAuthStatus={setAuthStatus} />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
