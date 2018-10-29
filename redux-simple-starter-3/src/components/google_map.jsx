import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { lat, lon } = this.props;
    new window.google.maps.Map(this.mapRef.current, {
      zoom: 12,
      center: { lat, lng: lon }
    });
  }

  render() {
    return <div ref={this.mapRef} />;
  }
}

export default GoogleMap;
