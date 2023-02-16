import { $get } from '@/api'
import { Currency } from '@/types/currency'

export const fetchCurrencyList = (filter_assets_id: string) =>
  $get<Currency[]>('/api/v1/currency', {
    filter_assets_id,
  })
