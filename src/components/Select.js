import React, { Component, PropTypes } from 'react';

export default class Select extends Component {
  static propTypes = {
    select: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.select(this.state.query);
  }

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="search"
            value={this.state.query}
            onChange={this.onChange}
          />
        </form>
    );
  }
}
