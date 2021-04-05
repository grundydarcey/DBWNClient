import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='headernav'>
      <section className='nav'>
        <p><Link to='/restaurants'>Restaurants</Link></p>
        <p><Link to='/nightlife'>Nightlife</Link></p>
        <p><Link to='/donate'>Donate</Link></p>
        <p><Link to='/'>Home</Link></p>
      </section>
      <h1>Daytona Beach, What Now?</h1>
    </nav>
  )
}