import { lazy } from 'react'

// lazy load components
const CurrencyPage = lazy(() => import('@/pages/CurrencyPage'))

const routes = {
  '/currency': () => <CurrencyPage />,
}

export default routes
