import React, { Component } from 'react';
import './adult.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class Adult extends Component {
  static contextType = ApiContext;
    render() {
      console.log(this.context.adult)
    return (
      <section className='adultholder'>
        <section className='nightlifenav'>
          <p className='nightlifesection'><Link to='/nightlife/seabreeze'>Seabreeze</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/ormond'>Ormond</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/mainst'>Main St.</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife'>All Nightlife</Link></p>
        </section>
        <section className='adult'>
          <p className='nlintrotext'>Here are adult clubs</p>
        </section>
      </section>
    )
  }
}