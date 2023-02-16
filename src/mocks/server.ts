import { setupServer } from 'msw/node'
import { currencyHandlers } from './currency'
// This configures a Service Worker with the given request handlers.
export const server = setupServer(...currencyHandlers)
