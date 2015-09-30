import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import History from '../History';

describe('History', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      select: expect.createSpy(),
      current: 'frontend',
      subreddits: ['frontend', 'reactjs', 'javascriot'],
    };

    const renderer = createRenderer();
    renderer.render(<History {...props} />);

    const output = renderer.getRenderOutput();
    const list = output.props.children;
    expect(output.type).toBe('nav');
    expect(list.props.children.length).toEqual(3);

    const [ frontend ] = list.props.children;
    expect(frontend.props.children[0]).toBe('✓');
  });

  it('should call props.select when item is selected', () => {
    const props = {
      select: expect.createSpy(),
      current: 'frontend',
      subreddits: ['frontend', 'reactjs', 'javascriot'],
    };

    const renderer = createRenderer();
    renderer.render(<History {...props} />);

    const output = renderer.getRenderOutput();
    const list = output.props.children;
    const [ frontendItem ] = list.props.children;
    const button = frontendItem.props.children[1];

    button.props.onClick();
    expect(props.select.calls[0].arguments[0]).toBe('frontend');
  });
});
