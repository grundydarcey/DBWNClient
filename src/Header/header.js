import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
const [showMenu, setShowMenu] = useState(false);

let menu
let menuMask
if(showMenu) {
  menu  = 
  <div className='menutext'>
    <section className='exit'>
    <FontAwesomeIcon
      icon={faTimes}
      onClick={() => setShowMenu(!showMenu)}
      size='3x'
    />
    </section><br /><hr className='exittrailing' /> 
    <p className='linkentries'><Link to='/'>Home</Link></p><br /><hr />
    <p className='linkentries'><Link to='/restaurants'>Restaurants</Link></p><br /><hr />
    <p className='linkentries'><Link to='/nightlife'>Nightlife</Link></p><br /><hr />
    <p className='linkentries'><Link to='/map'>Map</Link></p><br /><hr />
    <p className='linkentries'><Link to='/donate'>Donate</Link></p>
  </div>
}

if (showMenu) {
  menuMask = 
    <div className='mask'>
    </div>
}

  return (
    <nav className='headernav'>
      <section className='nav'>
        <section className='hamburger'>
        <FontAwesomeIcon
          icon={faBars}
          className='fontbars'
          color='#fff'
          size='2x'
          onClick={() => setShowMenu(!showMenu)}
        />
        </section>
        {menuMask}
        {menu}
      </section>
      <section className='sitename'>
        <h1>Daytona Beach, What Now?</h1>
      </section>
      <hr />
    </nav>
  )
}