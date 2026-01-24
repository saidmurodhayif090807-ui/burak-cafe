import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss'
const Navbar = () => {
  return (
    <section className="hero-section">
      <nav className="navbar">
        <div className="logo">BURAK</div>
        <ul className="nav-links">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/ProductPage'}>ProductPage</NavLink></li>
          <li><NavLink to={'/MyPage'}>MyPage</NavLink></li>
          <li><NavLink to={'/OrderPage'}>OrderPage</NavLink></li>
          <li><a href="#help">Help</a></li>
          <li><i className="cart-icon">🛒</i></li>
          <li><button className="btn-login">LOGIN</button></li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="text-container">
          <h1>World's Most <br /> Delicious Cuisine</h1>
          <p className="subtitle">The Choice, not just a choice</p>
          <p className="hours">24 hours service</p>
          <button className="btn-signup">SIGN UP</button>
        </div>

        <div className="brand-overlay">
          <span className="czn-tag">— CZN —</span>
          <h2 className="main-brand">BURAK</h2>
          <h3 className="sub-brand">GURME</h3>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
    // <div className='Navbar'>
    //   <div className="links">
    //     <NavLink to={'/'}>home</NavLink>
    //     <NavLink to={'/ProductPage'}>ProductPage</NavLink>
    //     <NavLink to={'/MyPage'}>MyPage</NavLink>
    //     <NavLink to={'/OrderPage'}>OrderPage</NavLink>
    //   </div>
    // </div>