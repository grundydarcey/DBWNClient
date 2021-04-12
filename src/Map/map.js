import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './map.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class DBMap extends Component {
  render() {
    return (
      <section className='map'>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBxeZNDoVcoMg8copEd5n-ZleBL_Qvg3T4'
})(DBMap);