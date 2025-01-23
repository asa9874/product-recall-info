import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Foods from './pages/Foods'
import './styles/index.css';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Foods />
  </StrictMode>,
)
