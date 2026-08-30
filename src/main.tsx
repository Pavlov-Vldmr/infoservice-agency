import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CityProvider } from '@/contexts/CityContext.tsx'

import App from './App.tsx'

import 'normalize.css'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <CityProvider>
      <App />
    </CityProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
)

