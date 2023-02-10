import { $get } from '@/api'
import { Currency } from '@/types/currency'

export const fetchCurrencyList = (filter_asset_id: string) =>
  $get<Currency[]>('/v1/assets', {
    filter_asset_id,
  })

export const fetchCurrencyDetail = (assets_id: string) => $get<Currency[]>(`/v1/assets/${assets_id}`)
