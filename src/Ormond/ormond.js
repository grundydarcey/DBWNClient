import React, { Component } from 'react';
import './ormond.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class Ormond extends Component {
  static contextType = ApiContext;
  render() {
    const ormondSpots = this.context.ormond;
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
        <hr />
        <h1 className='nlintrotext'>
          Nightlife in Ormond
        </h1>
        <p className='nlintrotext'>While Ormond may be just a little bit out of the way on your Daytona Beach excursion, I think it's worth the trip. As well as a more upscale vibe in this area, you'll also find many restaurants from our guide in this area as well just a stones-throw away. </p>
        {ormondSpots.map(ormond =>
          <li key={ormond.club_id} className='individual'>
            <img src={ormond.club_image} id='icon' alt='icon'></img>
            <section className='liholder'>
              <p className='individualheader'>{ormond.club_name}</p>
              <p className='contacttext'>Contact<br />
              Addcress: {ormond.address_building_number} {ormond.address_street} {ormond.city}, {ormond.club_state} {ormond.address_zipcode}</p>
            </section>
          </li>)}
      </section>

    )
  }
}