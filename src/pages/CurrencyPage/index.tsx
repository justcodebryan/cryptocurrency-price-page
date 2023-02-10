import Card from '@/components/Card'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Typography from '@/components/Typography'
import { Currency } from '@/types/currency'
import { useState } from 'react'

const CurrencyPage = () => {
  const [currencyList, setCurrencyList] = useState<Currency[]>(
    new Array(10).fill({
      asset_id: 'BTC',
      name: 'BTC',
      type_is_crypto: 10,
      data_start: 'BTC',
      data_end: 'BTC',
      data_quote_start: 'BTC',
      data_quote_end: 'BTC',
      data_orderbook_start: 'BTC',
      data_orderbook_end: 'BTC',
      data_trade_start: 'BTC',
      data_trade_end: 'BTC',
      data_symbols_count: 10,
      volume_1hrs_usd: 1,
      volume_1day_usd: 1,
      volume_1mth_usd: 1,
      price_usd: 1,
    })
  )

  // const getCurrencyList = async () => {
  //   const res = await fetchCurrencyList('BTC;ETH')

  //   console.log(res)

  //   setCurrencyList(res)
  // }

  // useEffectOnce(() => {
  //   getCurrencyList()
  // })

  return (
    <Section>
      {(currencyList || []).map((currency) => (
        <Card key={currency.asset_id}>
          <Title level={1}>{currency.name}</Title>
          <Title level={2}>${currency.price_usd}</Title>
          <Typography>volume: {currency.volume_1day_usd}</Typography>
        </Card>
      ))}
    </Section>
  )
}

export default CurrencyPage
