import expect from 'expect';
import { subreddits } from './';
import {
  SUBREDDIT_REQUEST,
  SUBREDDIT_SUCCESS,
  SUBREDDIT_FAILURE,
} from '../actions';

describe('Reducers', () => {
  describe('subreddits', () => {
    it('should return the initial state', () => {
      const state = subreddits(undefined, {});
      const expectedState = {};

      expect(state).toEqual(expectedState);
    });

    it('should handle SUBREDDIT_REQUEST', () => {
      const state = subreddits(undefined, {
        type: SUBREDDIT_REQUEST,
        name: 'frontend',
      });

      const expectedState = {
        frontend: {
          error: false,
          loading: true,
          name: 'frontend',
          links: [],
        },
      };

      expect(state).toEqual(expectedState);
    });

    it('should handle SUBREDDIT_SUCCESS', () => {
      const initialState = {
        frontend: {
          error: false,
          loading: true,
          name: 'frontend',
          links: [],
        },
      };

      const state = subreddits(initialState, {
        type: SUBREDDIT_SUCCESS,
        subreddit: {
          name: 'frontend',
          links: ['link one', 'link two'],
        },
      });

      const expectedState = {
        frontend: {
          error: false,
          loading: false,
          name: 'frontend',
          links: ['link one', 'link two'],
        },
      };

      expect(state).toEqual(expectedState);
    });

    it('should handle SUBREDDIT_FAILURE', () => {
      const initialState = {
        frontend: {
          error: false,
          loading: true,
          name: 'frontend',
          links: [],
        },
      };

      const state = subreddits(initialState, {
        type: SUBREDDIT_FAILURE,
        name: 'frontend',
      });

      const expectedState = {
        frontend: {
          error: true,
          loading: false,
          name: 'frontend',
          links: [],
        },
      };

      expect(state).toEqual(expectedState);
    });
  });
});
