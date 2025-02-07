import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';
import RecallProducts from './pages/RecallProducts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nutrients from './pages/Nutrients';
import Footer from './layout/Footer';
import Headers from './layout/Headers';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Headers />
    <Routes>
      <Route path="/" element={<RecallProducts />} />
      <Route path="/Nutrients" element={<Nutrients />} />
    </Routes>
    <Footer />
  </Router>
);
