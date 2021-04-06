import React, { Component } from 'react';
import './restaurant.css';
import ApiContext from '../ApiContext';

export default class Restaurant extends Component {
  static contextType = ApiContext;
  
  render() {
    console.log(this.context)
    const Restaurants = this.context.restaurants;
    return (
      <section className='restaurant'>
        <p>Here are some restaurants</p>
        <ul>
          {Restaurants.map(rest =>
            <li key={rest.rest_id} className='individual'>
              <img src={rest.rest_image} id='icon' alt='icon'></img>
              <section className='liholder'>
                <p className='individualheader'><a href={rest.link} className='menulink'>{rest.rest_name}</a> | {rest.cuisine} </p>
                <p className='contacttext'>Contact</p>
                <p>Address: {rest.address_building_number} {rest.address_street} {rest.city}, {rest.rest_state} {rest.address_zipcode}</p>
                <p>Phone Number: {rest.phone_number} </p>
              </section>
            </li>
            )}
        </ul>
      </section>
    )
  }
}