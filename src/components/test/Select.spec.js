import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from './helpers/jsdomReact';
import Select from '../Select';

describe('Select', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      select: expect.createSpy(),
    };

    const renderer = createRenderer();
    renderer.render(<Select {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('form');
  });

  it('should call props.select when form is submitted', () => {
    const props = {
      select: expect.createSpy(),
    };

    const renderer = createRenderer();
    renderer.render(<Select {...props} />);

    const output = renderer.getRenderOutput();
    const textInput = output.props.children;

    textInput.props.onChange({
      target: {
        value: 'frontend',
      },
    });

    output.props.onSubmit({
      preventDefault: () => {},
    });

    expect(props.select.calls[0].arguments[0]).toBe('frontend');
  });
});
