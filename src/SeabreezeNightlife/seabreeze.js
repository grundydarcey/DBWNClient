import React, { Component } from 'react';
import './seabreeze.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class Seabreeze extends Component {
  static contextType = ApiContext;
  render() {
    console.log(this.context.seabreeze)
    return (
      <section className='seabreezeholder'>
        <section className='nightlifenav'>
          <p className='nightlifesection'><Link to='/nightlife'>All Nightlife</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/ormond'>Ormond</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/mainst'>Main St.</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/adult'>Adult</Link></p>
        </section>
        <section className='seabreeze'>
          <p className='nlintrotext'>Here are clubs on seabreeze</p>
        </section>
      </section>
    )
  }
}