import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './app/styles/index.css'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
)
