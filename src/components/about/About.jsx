import React, { Component } from 'react';
import classes from './About.module.css';

import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
    
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>Rana Moiz</b>. I am a passionate developer having experience in{' '}
            <b>Frontend</b>  development 
            I'm currently working at{' '}
            <b>
          
             Innovium technologies
            
            </b>{' '}
            as a <b>Software Developer Engineer.</b> I am much interested in developing new things
            which excite me a lot. :)
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of
            latest trends. I try to leave every line of code I write more readable, accessible, and
            modular.
          </p>
        </div>
      
      </div>
    );
  }
}

export default About;
