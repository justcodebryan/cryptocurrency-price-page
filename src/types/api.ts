// export type CustomResponse<TResponse = any, TConfig = any> = Promise<void | AxiosResponse<TResponse, TConfig>>
export type CustomResponse<TResponse = unknown, TConfig = unknown> = Promise<void | TResponse>
