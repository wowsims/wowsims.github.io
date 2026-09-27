import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index.tsx'

import 'bootstrap'
import './index.scss'

const homepage = document.getElementById('homepage')!;

createRoot(homepage).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
