import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 6.05,
      lng: 80.85
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAwyjlr0sP7jZ7PzdUwL_XXIt6T-U9Sdao" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={6.054570}
            lng={80.857622}
            text="Igabara Hobbit House"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;