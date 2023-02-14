import Card from '@/components/Card'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Typography from '@/components/Typography'
import useEffectOnce from '@/hooks/useEffectOnce'
import { fetchCurrencyList } from '@/services/currency'
import { Currency, CurrencyQueryString } from '@/types/currency'
import { DEFAULT_POLLING_INTERVAL } from '@/utils/constants'
import { useState } from 'react'

import styles from './styles.module.scss'

const CurrencyPage = () => {
  const [currencyList, setCurrencyList] = useState<Currency[]>([])

  useEffectOnce(() => {
    const getCurrencyList = async () => {
      const res = await fetchCurrencyList(CurrencyQueryString)
      setCurrencyList(res)
    }

    const interval = setInterval(() => {
      getCurrencyList()
    }, DEFAULT_POLLING_INTERVAL)

    getCurrencyList()

    return () => {
      clearInterval(interval)
    }
  })

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
              <Typography className={styles['currency-list-item-volume']}>
                <p>volume:</p>
                {currency.volume_1day_usd}
              </Typography>
            </div>
          </Card>
        ))}
      </Section>
    </>
  )
}

export default CurrencyPage
