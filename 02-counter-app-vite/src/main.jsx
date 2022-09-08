import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>
)