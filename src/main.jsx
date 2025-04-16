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
import 'crypto-browserify';
import 'url-browserify';
import 'querystring-es3';
import 'stream-http';
import 'https-browserify';
import 'os-browserify/browser';
import 'path-browserify';
import 'browserify-fs';
import 'browserify-zlib';

// Add polyfills to window
window.Buffer = Buffer;
window.process = process;
window.global = window;

// Add URL polyfill
window.URL = window.URL || window.webkitURL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
