import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
const [showMenu, setShowMenu] = useState(false);

let menu
let menuMask
if(showMenu) {
  menu  = 
  <div className='menutext'>
    <p><Link to='/'>Home</Link></p>
    <p><Link to='/restaurants'>Restaurants</Link></p>
    <p><Link to='/nightlife'>Nightlife</Link></p>
    <p><Link to='/map'>Map</Link></p> 
    <p><Link to='/donate'>Donate</Link></p>
  </div>
}

menuMask = 
<div className='mask'>
</div>

  return (
    <nav className='headernav'>
      <section className='nav'>
        <section className='hamburger'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
        </section>
        {menuMask}
        {menu}
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/restaurants'>Restaurants</Link></p>
        <p><Link to='/nightlife'>Nightlife</Link></p>
        <p><Link to='/map'>Map</Link></p>
        <p><Link to='/donate'>Donate</Link></p>
      </section>
      <section className='sitename'>
        <h1>Daytona Beach, What Now?</h1>
      </section>
      <hr />
    </nav>
  )
}