import axios from 'axios'
import { requestHandler, responseHandler } from './interceptor'

const instance = axios.create({
  baseURL: 'http://rest.coinapi.io/',
})

instance.interceptors.request.use(requestHandler)

instance.interceptors.response.use(responseHandler)
// instance.interceptors.response.use(errorHandler)

export default instance
