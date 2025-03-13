import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import'./components/style.css'
import Experiment5 from './components/Experiment5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Experiment5 />
  </StrictMode>,
)
