// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import './map.css';

// const mapStyles = {
//   width: '60%',
//   height: '60%'
// };

// export class DBMap extends Component {
//   render() {
//     return (
//       <section className='map'>
//         <Map
//           google={this.props.google}
//           zoom={14}
//           style={mapStyles}
//           initialCenter={
//             {
//               lat: -1.2884,
//               lng: 36.8233
//             }
//           }
//         />
//       </section>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_KEY
// })(DBMap);

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>

class DBMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.21,
      lng: -81.02
    },
    zoom: 11
  }

  render() {
    //const apiKey = `${process.env.REACT_APP_GOOGLE_KEY}`;
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={29.2108}
            lng={-81.0228}
            text="my marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default DBMap;