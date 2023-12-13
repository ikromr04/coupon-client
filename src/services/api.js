import axios from 'axios'
import { getToken } from './token'

const BACKEND_URL = 'http://127.0.0.1:8000/api'
const REQUEST_TIMEOUT = 5000

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  })

  api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  })

  return api
}
