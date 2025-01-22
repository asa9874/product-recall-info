import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Foods from './pages/Foods'
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Foods />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </StrictMode>,
)
