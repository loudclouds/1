import {
  SUBREDDIT_REQUEST,
  SUBREDDIT_SUCCESS,
  SUBREDDIT_FAILURE,
} from '../actions';

export const subreddits = (state = {}, action) => {
  switch (action.type) {

  case SUBREDDIT_REQUEST:
    return {
      ...state,
      [action.name]: {
        error: false,
        loading: true,
        name: action.name,
        links: [],
      },
    };

  case SUBREDDIT_SUCCESS:
    return {
      ...state,
      [action.subreddit.name]: {
        error: false,
        loading: false,
        name: action.subreddit.name,
        links: action.subreddit.links,
      },
    };

  case SUBREDDIT_FAILURE:
    return {
      ...state,
      [action.name]: {
        error: true,
        loading: false,
        name: state[action.name].name,
        links: state[action.name].links,
      },
    };

  default:
    return state;
  }
};
