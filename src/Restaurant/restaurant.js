import React, { Component } from 'react';
import './restaurant.css';
import ApiContext from '../ApiContext';

export default class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCuisine: null,
    }
    this.changeCuisine = this.changeCuisine.bind(this);
  }
  static contextType = ApiContext;
  
  changeCuisine = (e) => {
    e.preventDefault();
    this.setState({ chosenCuisine: e.target.value })
  }

  render() {
    const Restaurants = this.context.restaurants;
    const determineRestaurants = (this.state.chosenCuisine === null) ? (
      <ul>
        {Restaurants.map(rest =>
          <li key={rest.rest_id} className='individual'>
            <img src={rest.rest_image} id='icon' alt='icon'></img>
            <section className='liholder'>
              <p className='individualheader'>
                <a href={rest.link} target='_blank' rel='noreferrer' className='menulink'>
                  {rest.rest_name}
                </a> | {rest.cuisine}
              </p>
              <p className='contacttext'>
                Contact<br />
                Address: {rest.address_building_number} {rest.address_street} {rest.city}, {rest.rest_state} {rest.address_zipcode}<br />
                Phone Number: 
                <a href={rest.phone_link} className='phoneLink'>
                  {rest.phone_number}
                </a>
              </p>
            </section>
          </li>
        )}
      </ul>
    ) : (
      <ul>
      {Restaurants
        .filter(rest => rest.cuisine === this.state.chosenCuisine)
        .map(rest =>
          <li key={rest.rest_id} className='individual'>
            <img src={rest.rest_image} id='icon' alt='icon'></img>
            <section className='liholder'>
              <p className='individualheader'>
                <a href={rest.link} target='_blank' rel='noreferrer' className='menulink'>
                  {rest.rest_name}
                </a> | {rest.cuisine}
              </p>
              <p className='contacttext'>
                Contact<br />
                Address: {rest.address_building_number} {rest.address_street} {rest.city}, {rest.rest_state} {rest.address_zipcode}<br />
                Phone Number: 
                <a href={rest.phone_link} className='phoneLink'>
                  {rest.phone_number}
                </a>
              </p>
            </section>
          </li>
        )}
        </ul>
    )
  
    return (
      <section className='restaurant'>
        <h1>
          Daytona Beach Dining
        </h1>
        <p className='intro'>
          Ready for a good meal now that you made it to town? These restaurants listed below show off the best of the Daytona area from your favorite down-home American classics, to sushi, or seafood restaurants with the freshest fish that's just been caught. Clicking on the restaurant's name will quickly take you to their website to look over their menu and decide on your dish. We also list their phone number so you can make a quick call and even set a reservation if you need to.<br /><br />**This is not an exhaustive list by any means. There are plenty of other great restaurants in the area. The restaurants listed below come at the recommendation of myself, long-time locals, and visitors.<br /><br />
          <br />
          <label htmlFor='cuisines' className='cuisinelabel'>Already know what type of food you would like to eat? Select what you're craving from the drop down menu below to see a specific list of what's in town.</label><br /><br />
          <select name='cuisines' className='cuisinedropdown' onChange={this.changeCuisine}>
            <option value='Select'>Select cuisine...</option>
            <option value='Italian'>Italian</option>
            <option value='Seafood'>Seafood</option>
            <option value='Steakhouse'>Steakhouse</option>
            <option value='American'>American</option>
            <option value='Sushi'>Sushi</option>
          </select>
        </p>
        {determineRestaurants}
      </section>
    )
  }
}