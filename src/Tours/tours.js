import React, { Component } from 'react';
import './tours.css';
import ApiContext from '../ApiContext';

export default class Tours extends Component {
  static contextType = ApiContext;
  render() {
    const Tours = this.context.tours;
    return (
      <section className='tours'>
        <h1>
          Daytona Beach Excursions
        </h1>
        <p className='intro'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut luctus purus. Nulla vel mi nec ante scelerisque finibus. Phasellus a turpis vulputate, dictum orci vel, gravida enim. Curabitur tincidunt ullamcorper enim ut fringilla. Curabitur mollis pellentesque odio. Pellentesque fringilla tincidunt pharetra. Donec nisi justo, tristique non erat sed, sollicitudin vulputate est. Pellentesque varius tincidunt ante, suscipit rhoncus justo ornare commodo. Integer molestie enim id nisl ultrices, eget varius risus ultricies. Sed vitae scelerisque est.
        </p>
        <ul>
          {Tours.map(tour =>
            <li key={tour.tour_id} className='individual'>
              <img src={tour.tour_image} id='icon' alt='icon'></img>
              <section className='liholder'>
                <p className='individualheader'>
                  <a href={tour.link} target='_blank' rel='noreferrer'>
                    {tour.tour_name}
                  </a>
                </p>
                <p className='contacttext'>
                  Contact<br />
                  Address: {tour.address_building_number} {tour.address_street} {tour.city}, {tour.tour_state} {tour.address_zipcode}<br />
                  Phone Number:
                  <a href={tour.phone_link}>
                    {tour.phone_number}
                  </a>
                </p>
              </section>
            </li>  
          )}
        </ul>
      </section>
    )
  }
}