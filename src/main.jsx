import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TentangKami from './pages/TentangKami.jsx'
import Hosting from './pages/Hosting.jsx'
import HostingPHP from './pages/HostingPHP.jsx'
import Pricing from './pages/Pricing.jsx'
import CekStatus from './pages/CekStatus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/hosting/php" element={<HostingPHP />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cek-status" element={<CekStatus />} />
        {/* Catch all - redirect to home for any unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
