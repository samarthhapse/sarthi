import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Preloader from './components/preloader/Preloader.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
  <Preloader/>
  </React.StrictMode>,
)
