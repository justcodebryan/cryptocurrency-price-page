import { AnyObject } from '@/types'
import { CustomResponse } from '@/types/api'
import instance from './instance'

export const $request = <TResponse = unknown, TParams = unknown, TData = unknown>(
  url: string,
  method: string,
  params: TParams,
  data: TData
): CustomResponse<TResponse> => {
  const token = import.meta.env.VITE_API_KEY
  instance.defaults.headers.common['X-CoinAPI-Key'] = token

  return new Promise((resolve, reject) => {
    instance
      .request({
        url,
        method,
        params,
        data,
      })
      .then((res) => {
        if (res && res.data) {
          return resolve(res.data)
        }

        return reject(res)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export const $get = <TResponse = unknown, TParams extends object = AnyObject>(
  url: string,
  params?: TParams
): CustomResponse<TResponse> => $request<TResponse>(url, 'GET', params || {}, {})

export const $post = <TResponse = unknown, TData extends object = AnyObject>(
  url: string,
  data: TData
): CustomResponse<TResponse> => $request<TResponse>(url, 'POST', {}, data)

export const $put = <TResponse = unknown, TData extends object = AnyObject>(
  url: string,
  data: TData
): CustomResponse<TResponse> => $request<TResponse>(url, 'PUT', {}, data)

export const $delete = <TResponse = unknown, TData extends object = AnyObject>(
  url: string,
  data: TData
): CustomResponse<TResponse> => $request<TResponse>(url, 'DELETE', {}, data)
