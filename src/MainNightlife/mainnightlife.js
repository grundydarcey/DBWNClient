import React, { Component } from 'react';
import './mainnightlife.css';
import { Link } from 'react-router-dom';

export default class MainNightlife extends Component {
  render() {
    return (
      <section className='mainnightlifeholder'>
        <section className='nightlifenav'>
          <p className='nightlifesection'><Link to='/nightlife/seabreeze'>Seabreeze</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/onedaytona'>One Daytona</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife'>All Nightlife</Link></p>
        </section>
        <p>Here are clubs on main street</p>
      </section>
    )
  }
}