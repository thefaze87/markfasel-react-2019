import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <h1>Mark Fasel</h1>
        </div>
        <ul className="navigation">
          <li><a href="/">Home</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/awards">Awards</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </header>
    );
  }
};

export default Header;