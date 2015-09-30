import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import App from '../App';
import Select from '../Select';
import History from '../History';

describe('App', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      select: () => {},
      current: 'frontend',
      subreddits: ['frontend', 'javascript'],
    };

    const renderer = createRenderer();
    renderer.render(<App {...props} />);

    const output = renderer.getRenderOutput();
    const [ select, history ] = output.props.children;
    expect(output.type).toBe('div');
    expect(select.type).toBe(Select);
    expect(history.type).toBe(History);
  });
});
