import React, { Component } from 'react';
import './mapholder.css';
import DBMap from '../Map/map';
import RedDot from '../Images/reddot.png';
import BlueDot from '../Images/bluedot.png';

export default class MapHolder extends Component {
  render() {
    return (
      <section className='mapholder'>
        <p className='mapexplanation'>
          If you're still wondering about where everything is in town, this page can help. Feel free to use the map below to find the location of each different venue. There is a key down below the map to signify each type of establishment. On clicking one of these pins, you can see the name of the establishment and the address. If it is a restaurant, you can also click on the restaurant's name and be directed to their website.
        </p>
        <section className='mapdisplay'>
          <DBMap className='dbmap' />
        </section><br />
        <p className='key'>
          <img src={RedDot} alt='reddot' id='reddot'></img>
          Red indicates restaurants.<br /><br />
          <img src={BlueDot} alt='bluedot' id='bluedot'></img>
          Blue indicates nightlife venues.
        </p>
      </section>
    )
  }
}