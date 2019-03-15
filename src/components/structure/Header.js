import React, { Component } from 'react';
import Card from './styled/Cards';

import logo from "../../images/markfasel-logo.svg";

class Header extends Component {
  render() {
    return (
      <Card.Header>
        <Card.Logo>
          <h1><a href="/"><img src={logo} alt="Mark Fasel - UX Designer &amp; Software Developer" /></a></h1>
        </Card.Logo>
        <Card.Navigation>
          <li><a href="/">Home</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/awards">Awards</a></li>
          <li><a href="/contact">Contact</a></li>
        </Card.Navigation>
      </Card.Header>
    );
  }
};

export default Header;