import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store'
import router from './routes/router'
import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}>
        </RouterProvider>
      </PersistGate>

    </Provider>
  </React.StrictMode>,
)
