import React, { Component } from 'react';
import './seabreeze.css';
import { Link } from 'react-router-dom';

export default class Seabreeze extends Component {
  render() {
    return (
      <section className='seabreezeholder'>
        <section className='nightlifenav'>
          <p className='nightlifesection'><Link to='/nightlife'>All Nightlife</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/onedaytona'>One Daytona</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/mainst'>Main St</Link></p>
        </section>
        <section className='seabreeze'>
          <p>Here are clubs on seabreeze</p>
        </section>
      </section>
    )
  }
}