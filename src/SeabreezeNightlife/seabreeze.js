import React, { Component } from 'react';
import './seabreeze.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class Seabreeze extends Component {
  static contextType = ApiContext;
  render() {
    const Seabreeze = this.context.seabreeze;
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
        <hr />
        <section className='seabreeze'>
          <p className='nlintrotext'>The Seabreeze area has many nightlife venues to boast. And you don't even have to be 21 to get into all of them! If you havent't celebrated your 21st yet, you can still head out and have a great time at Razzles or Club 509. This area also has a fun axe-throwing bar (Axe and Grog) as well as a car-themed brewery (Daytona Tap Room), and a classic Irish bar (Robbie O'Connell's). The possibilites are really endless on this strip.</p>
        </section>
        {Seabreeze.map(sea =>
          <li key={sea.club_id} className='individual'>
            <img src={sea.club_image} id='icon' alt='icon'></img>
            <section className='liholder'>
              <p className='individualheader'>{sea.club_name}</p>
              <p className='contacttext'>Contact<br />
              Address: {sea.address_building_number} {sea.address_street} {sea.city}, {sea.club_state} {sea.address_zipcode}</p>
            </section>
          </li>)}
      </section>
    )
  }
}