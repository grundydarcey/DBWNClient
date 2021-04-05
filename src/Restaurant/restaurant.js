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
              Name: <a href={rest.link} className='menulink'>{rest.rest_name}</a>
            </li>
            )}
        </ul>
      </section>
    )
  }
}