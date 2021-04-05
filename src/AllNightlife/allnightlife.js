import React, { Component } from 'react';
import './allnightlife.css';
import ApiContext from '../ApiContext';

export default class AllNightlife extends Component {
  static contextType = ApiContext;

    render() {
      const Nightclub = this.context.nightlife;
      console.log(this.context)
    return (
      <section className='nightlife'>
        <p>Here are some nightclubs</p>
        <ul>
          {Nightclub.map(clubs =>
            <li key={clubs.club_id} className='individual'>
              Name: {clubs.club_name}
            </li>)}
          </ul>
      </section>
    )
  }
}