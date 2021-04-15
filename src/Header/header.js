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
    <section className='linkholder'>
      <section className='exit'>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => setShowMenu(!showMenu)}
        size='3x'
      />
      </section>
      <p className='linkentries'><Link to='/' onClick={() => setShowMenu(!showMenu)}>Home</Link></p>
      <p className='linkentries'><Link to='/restaurants' onClick={() => setShowMenu(!showMenu)}>Restaurants</Link></p>
      <p className='linkentries'><Link to='/nightlife' onClick={() => setShowMenu(!showMenu)}>Nightlife</Link></p>
      <p className='linkentries'><Link to='/map' onClick={() => setShowMenu(!showMenu)}>Map</Link></p>
      <p className='linkentries'><Link to='/donate' onClick={() => setShowMenu(!showMenu)}>Donate</Link></p>
    </section>
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