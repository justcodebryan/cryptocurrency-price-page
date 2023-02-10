import '@/styles/reset.css'
import useEffectOnce from './hooks/useEffectOnce'
import { fetchCurrencyList } from './services/currency'

function App() {
  const getCurrencyList = async () => {
    const res = await fetchCurrencyList(1, 10)
    console.log(res)
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
