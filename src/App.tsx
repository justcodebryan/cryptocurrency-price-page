import '@/styles/reset.css'
import useEffectOnce from './hooks/useEffectOnce'
import { fetchCurrencyList } from './services/currency'

function App() {
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
    </div>
  )
}

export default App
