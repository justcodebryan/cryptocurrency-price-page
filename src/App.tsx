import '@/styles/reset.css'
import { Link, useRoutes } from 'raviger'
import { Suspense } from 'react'
import routes from './routes'

function App() {
  const route = useRoutes(routes)

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Link href="/currency">Currency List</Link>
        <br />
        <Link href="/currency/ETH">Currency Detail Page</Link>
        {route}
      </Suspense>
    </div>
  )
}

export default App
