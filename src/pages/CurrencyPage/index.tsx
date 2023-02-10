import Card from '@/components/Card'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Typography from '@/components/Typography'
import { Currency } from '@/types/currency'
import { useState } from 'react'

import styles from './styles.module.scss'

const CurrencyPage = () => {
  const [currencyList, setCurrencyList] = useState<Currency[]>(
    new Array(10).fill({
      asset_id: 'BTC',
      name: 'Bitcoin',
      type_is_crypto: 1,
      data_start: '2010-07-17',
      data_end: '2019-11-03',
      data_quote_start: '2014-02-24T17:43:05.0000000Z',
      data_quote_end: '2019-11-03T17:55:07.6724523Z',
      data_orderbook_start: '2014-02-24T17:43:05.0000000Z',
      data_orderbook_end: '2019-11-03T17:55:17.8592413Z',
      data_trade_start: '2010-07-17T23:09:17.0000000Z',
      data_trade_end: '2019-11-03T17:55:11.8220000Z',
      data_symbols_count: 22711,
      volume_1hrs_usd: 102894431436.49,
      volume_1day_usd: 2086392323256.16,
      volume_1mth_usd: 57929168359984.54,
      price_usd: 9166.207274778,
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
    <>
      <Title level={1} className={styles['currency-title']}>
        Cryptocurrency Realtime Price
      </Title>
      <Section className={styles['currency-list']}>
        {(currencyList || []).map((currency) => (
          <Card key={currency.asset_id}>
            <div className={styles['currency-list-item']}>
              <Title level={1} className={styles['currency-list-item-title']}>
                {currency.name}
              </Title>
              <Title level={2} className={styles['currency-list-item-price']}>
                ${currency.price_usd}
              </Title>
              <Typography className={styles['currency-list-item-price']}>
                <b>volume:</b>
                <br /> {currency.volume_1day_usd}
              </Typography>
            </div>
          </Card>
        ))}
      </Section>
    </>
  )
}

export default CurrencyPage
