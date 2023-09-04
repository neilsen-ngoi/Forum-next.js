import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/app'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
      domain="matai-2023-neil.au.auth0.com"
      clientId="3Qe2EvyaurxaVMuGXZQsNihyuFFBduzs"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://forum/api',
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
