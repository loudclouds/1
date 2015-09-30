import React, { Component, PropTypes } from 'react';

export default class Status extends Component {
  static propTypes = {
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { error, loading } = this.props;

    if (error) {
      return <h1>Oops, something went wrong</h1>;
    }

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return null;
  }
}
