import React, { Component, PropTypes } from 'react';
import Status from './Status';
import Links from './Links';

export default class Subreddit extends Component {
  static propTypes = {
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
  };

  render() {
    const { error, loading, name, links } = this.props;

    const linksLoaded = !error && !loading;

    return (
      <div>
        <h1>/r/{name}</h1>
        {
          linksLoaded ?
            <Links links={links} /> :
            <Status error={error} loading={loading} />
        }
      </div>
    );
  }
}
