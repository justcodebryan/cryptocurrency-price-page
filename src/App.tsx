import '@/styles/reset.css'
import '@/styles/index.scss'
import { useRoutes } from 'raviger'
import { Suspense } from 'react'
import routes from './routes'

function App() {
  const route = useRoutes(routes)

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>{route}</Suspense>
    </div>
  )
}

export default App
