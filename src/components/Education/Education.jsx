import React, { Component } from 'react';
import classes from './Education.module.css';

import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>

        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
              
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>March(2023)-Present</span>
                      </h2>
                      <p>
                        I am currently working as <b>Software Developer Engineer</b> at{' '}
                        
                          <b>Innovium technologies</b>
                      
                        <i>
                        
                        </i>
                       
                      </p>
                    </div>
                  </article>
               
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                
                  </article>
               
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Education <span>2018-2022</span>
                      </h2>
                      <p>
                      I have completed my Bachelor's in Computer Science from Superior University, Gujranwala, Punjab, Pakistan, with a CGPA of 3.31
                      </p>
                    </div>
                  </article>
                 

            
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship</h2>
                      <p>Completed three month Internship in React Js at Innovium technologies</p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
        
                </div>
              </div>
            </div>
          </div>
        </section>
      
      </div>
    );
  }
}

export default Education;
