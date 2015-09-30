import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import App from '../components/App';

class AppRoute extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    current: PropTypes.string,
    subreddits: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { dispatch, current, subreddits, children } = this.props;
    return (
      <App
        select={subreddit => dispatch(pushState(null, `/${subreddit}`))}
        current={current}
        subreddits={subreddits}
        children={children}
      />
    );
  }
}

const mapStateToProps = state => ({
  current: state.router.params.subreddit,
  subreddits: Object.keys(state.subreddits),
});

export default connect(mapStateToProps)(AppRoute);
