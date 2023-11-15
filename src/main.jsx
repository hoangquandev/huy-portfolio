import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MouseProvider } from './utils/mouseContext.jsx'
import SmoothScroll from './components/common/SmoothScroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScroll>
      <MouseProvider>
        <App />
      </MouseProvider>
    </SmoothScroll>
  </React.StrictMode>,
)
