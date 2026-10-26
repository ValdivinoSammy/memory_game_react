import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FlipProvider } from './context/FlipContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlipProvider>
      <App />
    </FlipProvider>
  </StrictMode>,
)
