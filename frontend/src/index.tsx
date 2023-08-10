import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './fonts/font.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil' // RecoilRoot import
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.withCredentials = true
root.render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>,
)
