import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BotonCancelar from './component/publics/Boton Cancelar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BotonCancelar />
  </StrictMode>,
)
