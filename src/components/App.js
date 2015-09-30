import React, { Component, PropTypes } from 'react';
import Select from './Select';
import History from './History';

export default class App extends Component {
  static propTypes = {
    select: PropTypes.func.isRequired,
    current: PropTypes.string,
    subreddits: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { select, current, subreddits, children } = this.props;

    return (
      <div>
        <Select select={select} />
        <History
          select={select}
          current={current}
          subreddits={subreddits}
        />
        {children}
      </div>
    );
  }
}
