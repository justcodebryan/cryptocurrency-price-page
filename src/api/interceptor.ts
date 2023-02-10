import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
// Request Interceptor
export const requestHandler = (config: InternalAxiosRequestConfig) => {
  return config
}

//  Response Interceptor
export const responseHandler = (response: AxiosResponse) => {
  return response.data
}

export const errorHandler = (err: AxiosError) => {
  if (err.response) {
    return Promise.reject(err.response.data)
  }

  if (err.request) {
    return Promise.reject(err.request)
  }

  return Promise.reject(err.message)
}
