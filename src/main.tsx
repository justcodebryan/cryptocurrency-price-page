import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

/*
 * Some Side-Effect will be called twice when the page first-time render.
 * It will not effect the production behavior.
 * Just ignore it or comment the strict mode tag.
 *   source1: https://stackoverflow.com/questions/68914256/react-request-to-api-trigger-two-times-the-then-block-the-request-is-sended-tw
 *   source2: https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
 **/
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
