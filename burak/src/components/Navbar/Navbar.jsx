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
function Navbar() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <div className='Navbar'>
      <div className="links">
        <NavLink to={'/'}>home</NavLink>
        <NavLink to={'/ProductPage'}>ProductPage</NavLink>
        <NavLink to={'/MyPage'}>MyPage</NavLink>
        <NavLink to={'/OrderPage'}>OrderPage</NavLink>
      </div>
    </div>
  )
}

export default Navbar
