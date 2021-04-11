import React, { Component } from 'react';
import './allnightlife.css';
import ApiContext from '../ApiContext';
import NightlifeNav from '../NightlifeNav/nightlifenav';

export default class AllNightlife extends Component {
  static contextType = ApiContext;

    render() {
      const Nightclub = this.context.nightlife;
      console.log(this.context)
    return (
      <section className='allnightlife'>
        <NightlifeNav />
        <hr />
        <section className='nightlife'>
          <p>Here are some nightclubs</p>
          <ul className='locationholder'>
            {Nightclub.map(clubs =>
              <li key={clubs.club_id} className='individual'>
                <img src={clubs.club_image} id='icon' alt='icon'></img>
                <section className='liholder'>
                  <p className='individualheader'>{clubs.club_name}</p>
                  <p className='contacttext'>Contact<br />
                  Address: {clubs.address_building_number} {clubs.address_street} {clubs.city}, {clubs.club_state} {clubs.address_zipcode}</p>
                </section>
            </li>)}
          </ul>
        </section>
      </section>
    )
  }
}