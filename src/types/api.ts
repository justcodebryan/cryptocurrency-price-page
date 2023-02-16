export type BaseResponse<TData = unknown> = {
  data?: TData
  code: number
  msg: string
}

export type CustomResponse<TResponse extends BaseResponse> = Promise<TResponse>
