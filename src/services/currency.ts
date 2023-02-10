import { $get } from '@/api'
import { Currency } from '@/types/currency'

export const fetchCurrencyList = (current = 1, pageSize = 10) =>
  $get<Currency>('/v1/assets', {
    current,
    pageSize,
  })
