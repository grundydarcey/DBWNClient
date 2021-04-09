import React, { Component } from 'react';
import './mainnightlife.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class MainNightlife extends Component {
  static contextType = ApiContext;
  render() {
    console.log(this.context.mainst)
    return (
      <section className='mainnightlifeholder'>
        <section className='nightlifenav'>
          <p className='nightlifesection'><Link to='/nightlife/seabreeze'>Seabreeze</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/ormond'>Ormond</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife'>All Nightlife</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/adult'>Adult</Link></p>
        </section>
        <p className='nlintrotext'>Here are clubs on main street</p>
      </section>
    )
  }
}