import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp from './MyApp'
import './reset.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)
