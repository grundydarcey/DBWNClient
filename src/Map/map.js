import React, { Component } from 'react';
import './map.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 29.207060, lng: -81.020737 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class DBMap extends Component {
  render() {
    return (
      <section className='map'>
        <div style={{width: "100vw", height: "100vh"}}>
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_KEY
          }`} 
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100&%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
      </section>
    )
  }
}