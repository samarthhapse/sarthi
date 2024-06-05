import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import Preloader from './components/preloader/Preloader.jsx'

import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Preloader />
  </Provider>
)
