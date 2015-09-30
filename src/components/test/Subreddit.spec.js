import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import Subreddit from '../Subreddit';
import Status from '../Status';
import Links from '../Links';

describe('Subreddit', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      loading: false,
      error: false,
      name: 'frontend',
      links: [
        {id: 1, url: 'url 1', title: 'title 1'},
        {id: 2, url: 'url 2', title: 'title 2'},
      ],
      subreddits: [],
      select: () => {},
    };

    const renderer = createRenderer();
    renderer.render(<Subreddit {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('div');
  });

  it('should render a status message until links have loaded', () => {
    const loadingProps = {
      loading: true,
      error: false,
      name: 'frontend',
      links: [],
      subreddits: [],
      select: () => {},
    };

    const loadedProps = {
      loading: false,
      error: false,
      name: 'frontend',
      links: [
        {id: 1, url: 'url 1', title: 'title 1'},
        {id: 2, url: 'url 2', title: 'title 2'},
      ],
      subreddits: [],
      select: () => {},
    };

    const renderer = createRenderer();
    renderer.render(<Subreddit {...loadingProps} />);

    const output = renderer.getRenderOutput();
    const [ , status ] = output.props.children;
    expect(status.type).toBe(Status);

    renderer.render(<Subreddit {...loadedProps} />);
    const newOutput = renderer.getRenderOutput();
    const [ , links ] = newOutput.props.children;
    expect(links.type).toBe(Links);
  });
});
