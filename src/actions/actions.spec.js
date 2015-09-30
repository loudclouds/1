import expect from 'expect';
import nock from 'nock';

import {
  getSubreddit,
  SUBREDDIT_REQUEST,
  SUBREDDIT_SUCCESS,
  SUBREDDIT_FAILURE,
} from './';

describe('Actions', () => {
  describe('getSubreddit', () => {
    afterEach(() => nock.cleanAll());

    it('should not create a SUBREDDIT_REQUEST action if subreddit exists', () => {
      nock('https://www.reddit.com')
        .get('/r/frontend.json')
        .reply(200, {});

      const dispatch = expect.createSpy();
      const getState = () => {
        return {
          subreddits: {
            frontend: [], // exists
          },
        };
      };

      getSubreddit('frontend')(dispatch, getState);
      expect(dispatch.calls.length).toBe(0);
    });

    it('should create an SUBREDDIT_REQUEST action', (done) => {
      nock('https://www.reddit.com')
        .get('/r/frontend.json')
        .reply(200, {});

      const dispatch = expect.createSpy();
      const getState = () => ({subreddits: []});

      getSubreddit('frontend')(dispatch, getState).then(() => {
        const action = dispatch.calls[0].arguments[0];

        const expectedAction = {
          type: SUBREDDIT_REQUEST,
          name: 'frontend',
        };

        expect(action).toEqual(expectedAction);
        done();
      });
    });

    it('should create an SUBREDDIT_SUCCESS action', (done) => {
      nock('https://www.reddit.com')
        .get('/r/frontend.json')
        .reply(200, {
          data: {
            children: [
              {
                data: 'link one',
              },
              {
                data: 'link two',
              },
            ],
          },
        });

      const dispatch = expect.createSpy();
      const getState = () => ({subreddits: []});

      getSubreddit('frontend')(dispatch, getState).then(() => {
        const action = dispatch.calls[1].arguments[0];

        const expectedAction = {
          type: SUBREDDIT_SUCCESS,
          subreddit: {
            name: 'frontend',
            links: ['link one', 'link two'],
          },
        };

        expect(action).toEqual(expectedAction);
        done();
      });
    });

    it('should create an SUBREDDIT_FAILURE action', (done) => {
      const dispatch = expect.createSpy();
      const getState = () => ({subreddits: []});

      nock('https://www.reddit.com')
        .get('/r/frontend.json')
        .reply(400);

      getSubreddit('frontend')(dispatch, getState).then(() => {
        const action = dispatch.calls[1].arguments[0];

        const expectedAction = {
          type: SUBREDDIT_FAILURE,
          name: 'frontend',
        };

        expect(action).toEqual(expectedAction);
        done();
      });
    });
  });
});
