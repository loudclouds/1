import React, { Component, PropTypes } from 'react';

export default class Links extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
  };

  render() {
    const { links } = this.props;

    if (links.length === 0) {
      return <h2>No links found</h2>;
    }

    return (
      <ul>
        {
          links.map(link =>
            <li key={link.id} className="link">
              <a href={link.url} target="_blank">{link.title}</a>
            </li>
          )
        }
      </ul>
    );
  }
}
