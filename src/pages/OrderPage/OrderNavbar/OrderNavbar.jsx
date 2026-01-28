import React from 'react'
import './OrderNavbar.scss'
import { NavLink } from 'react-router-dom'
function OrderNavbar() {
  return (
    <div className='OrderNavbar'>
      <div className="links">
        <NavLink to='/OrderPage/paused'>Paused order</NavLink>
        <NavLink to='/OrderPage/process'>Process order</NavLink>
        <NavLink to='/OrderPage/finished'>Finished order</NavLink>
      </div>
    </div>
  )
}

export default OrderNavbar
