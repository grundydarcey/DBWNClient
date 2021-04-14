import React, { Component } from 'react';
import './mainnightlife.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class MainNightlife extends Component {
  static contextType = ApiContext;
  render() {
    const MainSt = this.context.mainst
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
        <hr />
        <p className='nlintrotext'>Main Street holds many Daytona Beach classics. Bikers come from all over the country to spend time in these bars and be around their people. These bars are a perfect spot to put your kickstand down and have a great time.</p>
        {MainSt.map(main =>
          <li key={main.club_id} className='individual'>
            <img src={main.club_image} id='icon' alt='icon'></img>
            <section className='liholder'>
              <p className='individualheader'>{main.club_name}</p>
              <p className='contacttext'>Contact<br />
              Address: {main.address_building_number} {main.address_street} {main.city}, {main.club_state} {main.address_zipcode}</p>
            </section>
          </li>
          )}
      </section>
    )
  }
}