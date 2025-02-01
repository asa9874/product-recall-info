import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/reset.css';
import RecallProducts from './pages/RecallProducts';

createRoot(document.getElementById('root')!).render(
  <>
    <RecallProducts />
  </>,
)
