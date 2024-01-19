import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './style/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Theme
      appearance="dark"
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <App />
    </Theme>
  </React.StrictMode>,
)
