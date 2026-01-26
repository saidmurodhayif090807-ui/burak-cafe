import React from 'react'
import { NavLink } from 'react-router-dom'
import './HelpNavbar.scss'
function HelpNavbar() {
    return (
        <div>
            <div className='HelpNavbar'>
                <div className="links">
                    <NavLink to='/HelpPage/terms'>TERMS</NavLink>
                    <NavLink to='/HelpPage/faq'>FAQ</NavLink>
                    <NavLink to='/HelpPage/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default HelpNavbar
