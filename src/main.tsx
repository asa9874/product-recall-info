import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Foods from './pages/Foods'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Foods />
  </StrictMode>,
)
