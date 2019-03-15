import React, { Component } from 'react';
import Card from './styled/Cards';

class Header extends Component {
  render() {
    return (
      <Card.Header className="header">
        <Card.Logo>
          <h1>Mark Fasel</h1>
        </Card.Logo>
        <ul className="navigation">
          <li><a href="/">Home</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/awards">Awards</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </Card.Header>
    );
  }
};

export default Header;