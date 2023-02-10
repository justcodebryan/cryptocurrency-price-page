import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
// Add a request interceptor
export const requestHandler = (config: InternalAxiosRequestConfig) => {
  // Do something before request is sent
  return config
}

export const responseHandler = (response: AxiosResponse) => {
  // console.log(response)
  // Any status code that lie within the range of 2xx cause this function to trigger
  return response.data
}

// TODO: handler the error response and get error code after synced with backend.
export const errorHandler = (err: AxiosError) => {
  if (err.response) {
    return Promise.reject(err.response.data)
  }

  if (err.request) {
    return Promise.reject(err.request)
  }

  return Promise.reject(err.message)
}
