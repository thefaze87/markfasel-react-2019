import React, { Component, Fragment } from 'react';
import Card from './styled/Cards';
import frontend from "../../images/frontend-ico.svg";
import backend from "../../images/backend-ico.svg";
import uxdesign from "../../images/uxdesign-ico.svg";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Card.AboutMe>
          <div className="section-header">
            <h1>About <span>Me</span></h1>
          </div>
          <div className="about-left">
            <div className="content">
              <h2>Hi there! I’m Mark, a Sr. Software Engineer with a focus on front-end development and UX design. I am currently working at Scorpion where I get to lead projects, be a mentor, and build amazing products for our customers. I love helping clients dream big but create the impossible. I help solve problems, create solutions, and build brands.</h2>
              <p>I’ve been doing this for 10+ years and have a passion and love for this work. I build crazy cool websites, mobile apps, and web apps. I love modern technologies such as React and Angular, PHP & Laravel and Ruby on Rails mixed with a variety of other backend tools and database solutions.</p>
            </div>
          </div>
          <div className="about-right organge-block">
            <div className="content">
              <p>In the past, I have worked for large organizations and small agencies doing a variety of development, from <a href="https://publix.com" name="Publix Supermarkets Inc">Publix Supermarkets, Inc</a> as a Software Engineer, <a href="https://www.hopkinsallchildrens.org" name="Children\'s hospital in St. Petersburg, Florida">Johns Hopkins All Children\'s Hospital</a>, <a href="https://www.daveramsey.com" name="Delivering financial hope to others thru Total Money Makeover and Financial Peace">Dave Ramsey</a>, and <a href="https://www.differential.com" name="A small strategic web agency that delivers custom web applications located in Cincinati, Ohio">Differential</a>.</p>
              <p>From WordPress and Shopify to custom web apps, extensive UX and frontend development and full stack programming, I love it all and love to build partnerships with each client!</p>
              <p><a href="/#" className="resume-button">Check out my resume!</a></p>
            </div>
          </div>
        </Card.AboutMe>
        <Card.Services>
          <div className="col-1 first-column">
            <img src={frontend} />
            <h2>Front-End Development</h2>
            <p>Front-end development with HTML5, CSS3, SASS, ReactJS / Redux, Angular,VueJs, Lodash, Underscore and latest technologies.</p>
          </div>
          <div className="col-2 second-column">
            <img src={backend} />
            <h2>Back-End Development</h2>
            <p>Server side programming using NodeJS, MySQL, Postgres, MongoDB, GraphQL, MySql, PHP, Ruby on Rails, WordPress and Shopify.</p>
          </div>
          <div className="col-3 third-column">
            <img src={uxdesign} />
            <h2>User Experience Design</h2>
            <p>User research, strategy, and design to create the most memborable and easy to use web, apps, and mobile experiences.</p>
          </div>
        </Card.Services>
      </Fragment>
    );
  }
};

export default About;
