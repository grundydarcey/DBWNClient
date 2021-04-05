import React, { Component } from 'react';
import './restaurant.css';
import ApiContext from '../ApiContext';

export default class Restaurant extends Component {
  static contextType = ApiContext;
  
  render() {
    console.log(this.context.restaurants)
    const Restaurants = this.context.restaurants;

    return (
      <section className='restaurant'>
        <p>Here are some restaurants</p>
        <ul>
          {Restaurants.map(rest =>
            <li key={rest.id} className='individual'>
              Name: {rest.rest_name}
            </li>
            )}
        </ul>
      </section>
    )
  }
}