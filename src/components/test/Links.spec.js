import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import Links from '../Links';

describe('Links', () => {
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
    renderer.render(<Links {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('ul');
    expect(output.props.children.length).toBe(2);
  });

  it('should render a message if there aren\'t any links', () => {
    const props = {
      loading: false,
      error: false,
      name: 'frontend',
      links: [],
      subreddits: [],
      select: () => {},
    };

    const renderer = createRenderer();
    renderer.render(<Links {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.props.children).toBe('No links found');
  });
});
