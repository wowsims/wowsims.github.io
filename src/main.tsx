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

homepage.setAttribute('data-bs-spy', 'scroll');
homepage.setAttribute('data-bs-target', '#expansion-scrollspy');
homepage.setAttribute('data-bs-smooth-scroll', 'false');
homepage.setAttribute('data-bs-root-margin', '0px 0px -50%');
homepage.setAttribute('data-bs-threshold', '[0.25, 0.5, 1]');
