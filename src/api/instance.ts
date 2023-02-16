import axios from 'axios'
import { requestHandler, responseHandler } from './interceptor'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
})

instance.interceptors.request.use(requestHandler)

instance.interceptors.response.use(responseHandler)

export default instance
