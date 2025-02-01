import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/reset.css';
import RecallProducts from './pages/RecallProducts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <Router basename="/product-recall-info">
    <Routes>
      <Route path="/" element={<RecallProducts />} />
    </Routes>
  </Router>
)
