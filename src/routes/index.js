import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppRoute from './AppRoute';
import HomeRoute from './HomeRoute';
import SubredditRoute from './SubredditRoute';
import NotFoundRoute from './NotFoundRoute';
import { getSubreddit } from '../actions';

export const createRoutes = dispatch => (
  <Route path="/" component={AppRoute}>
    <IndexRoute component={HomeRoute} />
    <Route
      path=":subreddit"
      component={SubredditRoute}
      onEnter={state => dispatch(getSubreddit(state.params.subreddit))}
    />
    <Route path="*" component={NotFoundRoute} />
  </Route>
);
