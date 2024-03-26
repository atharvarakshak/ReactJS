import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-dom/client'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={}>

//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
