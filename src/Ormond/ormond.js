import React, { Component } from 'react';
import './ormond.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class Ormond extends Component {
  static contextType = ApiContext;
  render() {
    console.log(this.context.ormond)
    return (
      <section className='ormondholder'>
        <section className='nightlifenav'>
          <p className='nightlifesection'><Link to='/nightlife/seabreeze'>Seabreeze</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife'>All Nightlife</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/mainst'>Main St.</Link></p>
          <p className='nightlifesection'> | </p>
          <p className='nightlifesection'><Link to='/nightlife/adult'>Adult</Link></p>
        </section>
        <p className='nlintrotext'>Here are clubs on daytona</p>
      </section>
    )
  }
}