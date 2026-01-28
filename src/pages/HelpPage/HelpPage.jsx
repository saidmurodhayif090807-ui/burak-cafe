import React from 'react'
import Terms from './HelpPages/Terms/Terms'
import FAQ from './HelpPages/FAQ/FAQ'
import Contact from './HelpPages/Contact/Contact'
import { Outlet } from 'react-router-dom'
import HelpNavbar from './HelpNavbar/HelpNavbar'

function HelpPage() {
  return (
    <div>
      <HelpNavbar/>
      <Outlet/>
    </div>
  )
}

export default HelpPage
