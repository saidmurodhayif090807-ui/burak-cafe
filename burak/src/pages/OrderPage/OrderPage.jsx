import React from 'react'
import './OrderPage.scss'
import { NavLink, Outlet } from "react-router-dom";
import OrderNavbar from './OrderNavbar/OrderNavbar';
import Process from './OrderPages/Process/Process';
import Paused from './OrderPages/Paused/Paused';
function OrderPage() {
  return (
    <div className='OrderPage'>
      <div className="links">
        <NavLink to='/OrderPage'>Paused order</NavLink>
        <NavLink to='/OrderPage/process'>Process order</NavLink>
        <NavLink to='/OrderPage/finished'>Finished order</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default OrderPage
