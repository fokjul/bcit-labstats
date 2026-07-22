import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CookieModalProvider } from './contexts/CookieModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookieModalProvider>
      <App />
    </CookieModalProvider>
  </StrictMode>,
)
