import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CityProvider } from '@/contexts/CityContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CityProvider>
        <App />
      </CityProvider>
    </BrowserRouter>
  </StrictMode>,
)

