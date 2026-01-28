import React from 'react'
import Button from '@mui/material/Button';
import Stats from './Stats/Stats';
import Menu from './menu/Menu';
import Menu_imgff1 from './Home_imgs/cafe-vibe-hooghly-coffee-shops-yql63w3srw.webp'
import './Home.scss'
import Community from './Community/Community';
function Home() {
  return (
    <div className='Home'>
      <Stats/>
      <Menu/>
      <section className="cafe_wall"></section>
      <Community/>
    </div>
  )
}

export default Home
