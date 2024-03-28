import React, { Component } from 'react';
import classes from './Interest.module.css';

import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
   
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
   
       
        <div className={classes.app}>
          <h3>Web Development</h3>
          <p>
            Javascript/ Typescript,jQuery, HTML/ CSS, ReactJs,   Redux, Tailwind
            CSS, UI Libraries (React-Bootstrap,  MUI, Shadcn UI), Redux Toolkit, , Hook Form
            ,Bootstrap,React-Query,Context-Api.
          </p>
        </div>
      
        

  
      </div>
  
    </div>
  );
}
