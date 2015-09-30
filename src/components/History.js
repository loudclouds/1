import React, { Component, PropTypes } from 'react';

export default class History extends Component {
  static propTypes = {
    select: PropTypes.func.isRequired,
    current: PropTypes.string,
    subreddits: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  };

  render() {
    const { select, current, subreddits } = this.props;

    const historyItems = subreddits.map(subreddit =>
      <li key={subreddit}>
        {current === subreddit ? '✓' : null}
        <button onClick={() => select(subreddit)}>
          {subreddit}
        </button>
      </li>
    );

    return (
      <nav>
        <ul>{historyItems}</ul>
      </nav>
    );
  }
}
