import React from 'react'
import Nav from './components/Nav'

import Footer from '../../ChaiAurReact/07reactRouter/src/components/footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Nav/>
            <Outlet/> 
        <Footer/>
    </>
  )
}

export default Layout
