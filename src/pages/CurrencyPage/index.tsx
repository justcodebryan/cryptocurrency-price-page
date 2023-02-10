import useEffectOnce from '@/hooks/useEffectOnce'
import { fetchCurrencyList } from '@/services/currency'

const CurrencyPage = () => {
  const getCurrencyList = async () => {
    const res = await fetchCurrencyList('BTC;ETH')

    console.log(res)
  }

  useEffectOnce(() => {
    getCurrencyList()
  })

  return <></>
}

export default CurrencyPage
