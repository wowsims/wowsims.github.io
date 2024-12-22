import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index.tsx'

import 'bootstrap'
import './index.scss'

createRoot(document.getElementById('homepage')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

document.body.classList.add('ready')
