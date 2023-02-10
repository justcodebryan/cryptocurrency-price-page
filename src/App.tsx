import '@/styles/reset.css'
import '@/styles/index.scss'
import { useRoutes } from 'raviger'
import { Suspense } from 'react'
import Box from './components/Box'
import routes from './routes'

function App() {
  const route = useRoutes(routes)

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Box>{route}</Box>
      </Suspense>
    </div>
  )
}

export default App
