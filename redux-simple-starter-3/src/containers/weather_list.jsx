import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  /*  eslint class-methods-use-this: ["error", { "exceptMethods": ["renderWeather"] }] */
  renderWeather(cityData) {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Charts data={temps} color="orange" unit="°C" />
        </td>
        <td>
          <Charts data={pressure} color="green" unit="Pa" />
        </td>
        <td>
          <Charts data={humidity} color="blue" unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    const { weather } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

// ES6
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
