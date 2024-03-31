import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/home/About.jsx'
import Help from './components/home/Help.jsx'
import Daycare from './components/services/Daycare.jsx'
import Grooming from './components/services/Grooming.jsx'
import Pettraining from './components/services/Pettraining.jsx'
import VetAssistance from './components/services/VetAssistance.jsx'
import Walking from './components/services/Walking.jsx'
import Breeding from './components/services/Breeding.jsx'
import Signup from './components/home/Signup.jsx'
import Login from './components/home/Login.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

        <Route path=''  element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='help' element={<Help/>}/>
        <Route path='daycare' element={<Daycare/>}/>
        <Route path='grooming' element={<Grooming/>}/>
        <Route path='pettraining' element={<Pettraining/>}/>
        <Route path='vetassistance' element={<VetAssistance/>}/>
        <Route path='walking' element={<Walking/>}/>
        <Route path='breeding' element={<Breeding/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>

      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


