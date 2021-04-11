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
        <p className='intro'>Nam blandit erat quis nisi tincidunt suscipit. Sed mollis elit eu pulvinar vestibulum. Aenean nec metus iaculis, scelerisque nisl in, pharetra lectus. Proin in iaculis eros, sed aliquet ligula. Donec vel risus a dolor tristique tempor. Cras gravida mattis nisi vel facilisis. Duis sit amet justo diam. Nunc ut convallis nibh.</p>
        <ul className='locationholder'>
          {Restaurants.map(rest =>
            <li key={rest.rest_id} className='individual'>
              <img src={rest.rest_image} id='icon' alt='icon'></img>
              <section className='liholder'>
                <p className='individualheader'><a href={rest.link} target='_blank' rel='noreferrer' className='menulink'>{rest.rest_name}</a> | {rest.cuisine} </p>
                <p className='contacttext'>Contact<br />
                Address: {rest.address_building_number} {rest.address_street} {rest.city}, {rest.rest_state} {rest.address_zipcode}<br />
                Phone Number: <a href='tel:`${rest.phone_number}`'>{rest.phone_number}</a></p>
              </section>
            </li>
            )}
        </ul>
      </section>
    )
  }
}