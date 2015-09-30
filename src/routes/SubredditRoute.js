import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subreddit from '../components/Subreddit';

class SubredditRoute extends Component {
  static propTypes = {
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
  };

  render() {
    const { error, loading, name, links } = this.props;

    return (
      <Subreddit
        error={error}
        loading={loading}
        name={name}
        links={links}
      />
    );
  }
}

const mapStateToProps = state => {
  const current = state.router.params.subreddit;
  const subreddit = state.subreddits[current] || {
    error: false,
    loading: true,
    name: current,
    links: [],
  };

  return {
    ...subreddit,
    subreddits: Object.keys(state.subreddits),
  };
};

export default connect(mapStateToProps)(SubredditRoute);
