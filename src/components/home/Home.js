import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../structure/Header';
import Masthead from '../structure/Masthead';
import About from '../structure/About';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Masthead />
        <About />
      </div>
    );
  }
};

export default Home;