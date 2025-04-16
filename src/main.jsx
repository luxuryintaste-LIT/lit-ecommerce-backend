import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Polyfills
import { Buffer } from 'buffer';
import process from 'process';
import 'stream-browserify';
import 'util';
import 'assert';
import 'events';

// Add polyfills to window
window.Buffer = Buffer;
window.process = process;
window.global = window;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
