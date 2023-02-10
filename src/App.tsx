import '@/styles/reset.css'
import { Link, useRoutes } from 'raviger'
import { Suspense } from 'react'
import useEffectOnce from './hooks/useEffectOnce'
import routes from './routes'
import { fetchCurrencyList } from './services/currency'

function App() {
  const route = useRoutes(routes)

  const getCurrencyList = async () => {
    const res = await fetchCurrencyList('BTC;ETH')
    res.forEach((currency) => {
      console.log(currency.asset_id)
    })
  }

  useEffectOnce(() => {
    getCurrencyList()
  })

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Vite + React</h1>
        <Link href="/currency">currency</Link>
        <br />
        <Link href="/currency/ETH">currency 1 Page</Link>
        {route}
      </Suspense>
    </div>
  )
}

export default App
