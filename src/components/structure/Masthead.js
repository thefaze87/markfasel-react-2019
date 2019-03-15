import React, { Component } from 'react';

import Header from '../structure/Header';
import Card from './styled/Cards';

class Masthead extends Component {
  render() {
    return (
      <Card.Masthead>
        <Header />
        <Card.MastheadContent>
          <h1>Dream big, create the impossible.</h1>
          <p>Building a partnernership for your online business with creative UI/UX design and software development services.</p>
          <p><a href="/#" className="masthead-button">Wanna chat?</a></p>
        </Card.MastheadContent>
      </Card.Masthead>
    );
  }
};

export default Masthead;