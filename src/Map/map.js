import React, { useContext, useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, InfoWindow, withGoogleMap, Marker } from 'react-google-maps';
import ApiContext from '../ApiContext';

function Map() {
  const [selectedVenue, setSelectedVenue] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedVenue(null);
      }
    }
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    }
  }, []);

  const context = useContext(ApiContext)
  const availableRest = context.restaurants;
  const availableClubs = context.nightlife;
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 29.2301097, lng: -81.0116836 }}
      resetBoundsOnResize={true}
    >
    {availableRest.map(rest => 
      <Marker 
        key={rest.rest_id} 
        position={{ 
          lat: rest.lat, 
          lng: rest.lng 
        }}
        onClick={() => {
          setSelectedVenue(rest)
        }}
      />
    )}
    {availableClubs.map(club =>
      <Marker
        key={club.club_id}
        position={{
          lat: club.lat,
          lng: club.lng
        }}
        icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
        onClick={() => {
          setSelectedVenue(club)
        }}
      />
    )}

    {selectedVenue && (
      <InfoWindow
        onCloseClick={() => {
          setSelectedVenue(null);
        }}
        position={{
          lat: selectedVenue.lat,
          lng: selectedVenue.lng
        }}
      >
        <div>
          <a href={selectedVenue.link} className='maplink' target='_blank' rel='noreferrer'>
            {selectedVenue.rest_name}
          </a><br />
          {selectedVenue.club_name}<br />
          {selectedVenue.address_building_number} {selectedVenue.address_street} {selectedVenue.city}, {selectedVenue.rest_state} {selectedVenue.club_state} {selectedVenue.address_zipcode}
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function DBMap() {
  return (
    <div className='wrappedmap' style={{ width: '80vw', height: '80vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}