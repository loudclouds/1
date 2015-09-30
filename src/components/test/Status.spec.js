import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import Status from '../Status';

describe('Status', () => {
  jsdomReact();

  it('should render correctly', () => {
    const renderer = createRenderer();

    renderer.render(<Status error={false} loading={false} />);
    const output = renderer.getRenderOutput();
    expect(output).toNotExist();
  });

  it('should render an error message', () => {
    const renderer = createRenderer();

    renderer.render(<Status error loading={false} />);
    const output = renderer.getRenderOutput();
    expect(output.props.children).toBe('Oops, something went wrong');
  });

  it('should render a loading message', () => {
    const renderer = createRenderer();

    renderer.render(<Status error={false} loading />);
    const output = renderer.getRenderOutput();
    expect(output.props.children).toBe('Loading...');
  });
});
