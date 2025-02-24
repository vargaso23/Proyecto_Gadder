import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Boton_guardar from './component/publics/boton_guardar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Boton_guardar/>
  </StrictMode>,
)
