import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ProviderContext1} from './Context/Context1.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProviderContext1>
    <App />
    </ProviderContext1>
  
)
