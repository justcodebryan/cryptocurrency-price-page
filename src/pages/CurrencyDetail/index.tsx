import { $get } from '@/api'
import useEffectOnce from '@/hooks/useEffectOnce'
import { Currency } from '@/types/currency'

const CurrencyDetail = ({ id }: { id: string }) => {
  const getTest = async () => {
    const result = await $get<Currency>(`/v1/assets/${id}`)

    if (!result) return

    console.log(result)

    const { asset_id } = result

    console.log(asset_id)
  }

  useEffectOnce(() => {
    getTest()
  })

  return (
    <>
      <div>id: {id}</div>
    </>
  )
}

export default CurrencyDetail
