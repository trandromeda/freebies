import React from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import GoogleMap from './GoogleMap.jsx';
import { Freebies } from '../../api/freebies/freebies.js';

//-- Adapted from https://github.com/dburles/meteor-google-maps-react-example/blob/master/googlemaps-react.jsx

// hybrid view and container component for the Google Map
// all this does is fetch data and pass it to the GoogleMap component, which is what actually displays stuff

class PrimaryMap extends React.Component {
  componentDidMount() {
    GoogleMaps.load({key: 'AIzaSyBkDdFEaWkIkLpfAWCu2oTTqJKiN1llxwE'});
  }

  render() {
    if (this.props.loaded && this.props.mapOptions)
      return <GoogleMap name="freebiesmap" options={this.props.mapOptions}/>;

    return <div>Loading map...</div>;
  }
};

PrimaryMap.propTypes = {
  loaded: React.PropTypes.bool,
  mapOptions: React.PropTypes.object
}


// container component for the Primary Map that provides reactive data
export default PrimaryMapContainer = createContainer (() => {
  const loaded = GoogleMaps.loaded();
  const latLng = Geolocation.latLng();

  const _mapOptions = function() {
    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 17,
        streetViewControl: false, // hide the little person
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        }
      }
    }
  }
  const mapOptions = _mapOptions();

  return {
    loaded,
    mapOptions,
    latLng
  }
}, PrimaryMap)