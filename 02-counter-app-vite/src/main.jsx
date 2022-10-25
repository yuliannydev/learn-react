import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'
// import { CounterApp } from './CounterApp';
import FirstApp from './FirstApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <CounterApp value={0}/> */}
      <FirstApp title = 'Hello world!' subTitle = 'Desde React' name = 'Yulianny Betancourt'/>
    </React.StrictMode>
)