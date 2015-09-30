import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import Home from '../Home';

describe('Home', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      select: () => {},
      current: 'frontend',
      subreddit: ['frontend', 'javascript'],
    };

    const renderer = createRenderer();
    renderer.render(<Home {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('h1');
    expect(output.props.children).toBe('Try searching for something');
  });
});
