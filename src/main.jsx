import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Timer from "./Timer.jsx";
import './index.css'
import Card from "./Card.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Timer/>
    </React.StrictMode>,
)
