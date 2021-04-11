import React, { Component } from 'react';
import './adult.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class Adult extends Component {
  static contextType = ApiContext;
    render() {
      console.log(this.context.adult)
      const AdultInfo = this.context.adult
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
        <hr />
        <section className='adult'>
          <p className='nlintrotext'>Here are adult clubs</p>
          {AdultInfo.map(adult =>
            <li key={adult.club_id} className='individual'>
              <img src={adult.club_image} id='icon' alt='icon'></img>
              <section className='liholder'>
                <p className='individualheader'>{adult.club_name}</p>
                <p className='contacttext'>Contact<br />
                Address: {adult.address_building_number} {adult.address_street} {adult.city}, {adult.club_state} {adult.address_zipcode}</p>
              </section>
            </li>)}
        </section>
      </section>
    )
  }
}