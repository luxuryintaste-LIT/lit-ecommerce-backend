// Initialize Buffer globally first
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Other Polyfills
import process from 'process'
import 'stream-browserify'
import 'util'
import 'assert'
import 'events'
import 'crypto-browserify'
import 'url-browserify'
import 'querystring-es3'
import 'stream-http'
import 'https-browserify'
import 'os-browserify/browser'
import 'path-browserify'
import 'browserify-fs'
import 'browserify-zlib'

// Add remaining polyfills to window
window.process = process
window.global = window

// Add URL polyfill
window.URL = window.URL || window.webkitURL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
