import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {YelpContextProvider} from "./context/yelpContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <YelpContextProvider>
      <App />
    </YelpContextProvider>
  </React.StrictMode>,
)
