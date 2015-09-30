import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import NotFound from '../NotFound';

describe('NotFound', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      select: () => {},
      current: 'frontend',
      subreddit: ['frontend', 'javascript'],
    };

    const renderer = createRenderer();
    renderer.render(<NotFound {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('h1');
    expect(output.props.children).toBe('Not Found');
  });
});
