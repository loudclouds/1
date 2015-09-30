import fetch from 'isomorphic-fetch';

export const SUBREDDIT_REQUEST = 'SUBREDDIT_REQUEST';
export const SUBREDDIT_SUCCESS = 'SUBREDDIT_SUCCESS';
export const SUBREDDIT_FAILURE = 'SUBREDDIT_FAILURE';

export const getSubreddit = (subreddit) => (dispatch, getState) => {
  if (getState().subreddits[subreddit]) {
    return null;
  }

  dispatch({
    type: SUBREDDIT_REQUEST,
    name: subreddit,
  });

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(response => ({
      name: subreddit,
      links: response.data.children.map(item => item.data),
    }))
    .then(data => dispatch({
      type: SUBREDDIT_SUCCESS,
      subreddit: data,
    }))
    .catch(() => dispatch({
      type: SUBREDDIT_FAILURE,
      name: subreddit,
    }));
};
