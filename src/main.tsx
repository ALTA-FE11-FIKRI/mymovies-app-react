import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Index'
import './styles/index.css'
import DetailMovie from './pages/DetailMovie'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DetailMovie />
  </React.StrictMode>,
);
