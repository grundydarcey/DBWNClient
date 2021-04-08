import React, { Component } from 'react';
import './daytona.css';
import { Link } from 'react-router-dom';

export default class Daytona extends Component {
  render() {
    return (
      <section className='daytonaholder'>
        <section className='nightlifenav'>
          <p className='nightlifesection'><Link to='/nightlife/seabreeze'>Seabreeze</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife'>All Nightlife</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/mainst'>Main St</Link></p>
        </section>
        <p>Here are clubs on daytona</p>
      </section>
    )
  }
}