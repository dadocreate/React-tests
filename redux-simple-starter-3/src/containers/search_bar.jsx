import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    // this.onInputChange = this.onInputChange.bind(this); ALTERNATIVA
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    const { term } = this.state;
    const { fetchWeather } = this.props;

    event.preventDefault();
    // fetch data
    fetchWeather(term);
    this.setState({ term: '' });
  };

  render() {
    const { term } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five days forecast in your favorite cities"
          className="form-control"
          value={term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispachToProps
)(SearchBar);
