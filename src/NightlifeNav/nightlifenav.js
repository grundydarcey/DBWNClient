import React, { Component } from 'react';
import './nightlifenav.css';
import { Link } from 'react-router-dom';

export default class NightlifeNav extends Component {
  render() {
    return (
      <section className='nightlifenav'>
        <p className='nightlifesection'><Link to='/nightlife/seabreeze'>Seabreeze</Link></p>
        <p className='nightlifesection'> | </p>
        <p className='nightlifesection'><Link to='/nightlife/onedaytona'>One Daytona</Link></p>
        <p className='nightlifesection'> | </p>
        <p className='nightlifesection'><Link to='/nightlife/mainst'>Main St</Link></p>
      </section>
    )
  }
}