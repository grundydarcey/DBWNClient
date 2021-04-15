import React, { Component } from 'react';
import './adult.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class Adult extends Component {
  static contextType = ApiContext;
    render() {
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
          <h1 className='nlintrotext'>
            Adult Nightlife
          </h1>
          <p className='nlintrotext'>If your night skews a bit off-kilter, these are some establishments around that may pique your interest. From gentlemen's clubs to a 24-hour adult shop, there are a few different recommendations below to make sure you really see all of Daytona.</p>
          <ul>
            {AdultInfo.map(adult =>
              <li key={adult.club_id} className='individual'>
                <img src={adult.club_image} id='icon' alt='icon'></img>
                <section className='liholder'>
                  <p className='individualheader'>{adult.club_name}</p>
                  <p className='contacttext'>Contact<br />
                  Address: {adult.address_building_number} {adult.address_street} {adult.city}, {adult.club_state} {adult.address_zipcode}</p>
                </section>
              </li>
            )}
          </ul>
        </section>
      </section>
    )
  }
}