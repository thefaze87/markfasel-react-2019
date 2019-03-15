import React, { Component} from 'react';
import Masthead from '../structure/Masthead';
import About from '../structure/About';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Masthead />
        <About />
      </div>
    );
  }
};

export default Home;