import React, { Component, Fragment } from 'react';

class About extends Component {
  render() {
    return (
      <Fragment>
        <section className="section group-section aboutme">
          <h1>About <span>Me</span></h1>
          <div className="about-left content">
            <h2>Hi there! I’m Mark, UX designer and software developer. I love helping clients dream big but create the impossible. I help solve problems, create solutions, and build brands.</h2>
            <p>I’ve been doing this for over 14 years and have really developed a passion and love for this sort of work. I build crazy cool websites, mobile apps, and web apps. I love modern technologies such as React and Angular, PHP & Laravel and Ruby on Rails mixed with a variety of other backend tools and database solutions.</p>
          </div>
          <div className="about-right organge-block content">
            <p>In the past, I have worked for large organizations and small agencies doing a variety of development, from <a href="https://www.hopkinsallchildrens.org" name="Children's hospital in St. Petersburg, Florida">Johns Hopkins All Children's Hospital</a>, <a href="https://www.daveramsey.com" name="Delivering financial hope to others thru Total Money Makeover and Financial Peace">Dave Ramsey</a>, and <a href="https://www.differential.com" name="A small strategic web agency that delivers custom web applications located in Cincinati, Ohio">Differential</a>.</p>
            <p>From WordPress and Shopify to custom web apps, extensive UX and frontend development and full stack programming, I love it all and love to build partnerships with each client!</p>
            <p><a href="/#" className="resume-button">Check out my resume!</a></p>
          </div>
        </section>
        <section className="section group-section services">
          <div className="column first-column">
            <h2>Front-End Development</h2>
            <p>Front-end development with HTML5, CSS3, SASS, ReactJS / Redux, Angular,VueJs, Lodash, Underscore and latest technologies.</p>
          </div>
          <div className="column second-column">
            <h2>Back-End Development</h2>
            <p>Server side programming using NodeJS, MySQL, Postgres, MongoDB, GraphQL, MySql, PHP, Ruby on Rails, WordPress and Shopify.</p>
          </div>
          <div className="column third-column">
            <h2>User Experience Design</h2>
            <p>User research, strategy, and design to create the most memborable and easy to use web, apps, and mobile experiences.</p>
          </div>
        </section>
      </Fragment>
    );
  }
};

export default About;