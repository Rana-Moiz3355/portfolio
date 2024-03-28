import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

import logo from '../images/moiz.jpeg';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';


export default function Sidebar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };
  const iconList = [
    {
      component: github,
      href: 'https://github.com/Rana-Moiz3355'
    },
    {
      component: linkedin,
      href: 'https://www.linkedin.com/in/rana-moiz-443691220/'
    },
  
    {
      component: instagram,
      href: 'https://www.instagram.com/ranamoiz33/'
    },
    {
      component: gmail,
      href: 'mailto:ranamoiz3355@gmail.com'
    }
  ];
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='sidebar'>
      <div className='topHashtag'># programmer</div>
      
      <h1>
        <Link smooth to='/#start' className='h1_links'>
        Rana Moiz
        </Link>
      </h1>
      <motion.div
        animate={{ y: [2, -2] }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={logo} className='my-img' />
      </motion.div>
      <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
        <a
          
        
      
          className='fa fa-envelope'
        ></a>
        &nbsp;ranamoiz3355@gmail.com
      </p>

      <ul className='sidebar-nav'>

        <li className='sidebar-nav-items'>
          <Link smooth to='/#about' className='links'>
            About
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#interest' className='links'>
            Interest
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#education' className='links'>
            Education
          </Link>
        </li>
      </ul>

      <div>
        <motion.ul className='sidebar-nav' variants={container} initial='hidden' animate='visible'>
          {iconList.map((val, index) => (
            <motion.li key={index} variants={item}>
              <img
                onClick={() => {
                  window.open(val.href, '_blank');
                }}
                src={val.component}
                className='icon-img'
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div
        style={{
          color: 'black',
          fontWeight: 'bold',
          paddingTop: '30%'
        }}
        className='tagtop'
      >
        Made with <a href='#' className='fa fa-heart heart'></a> by me.
      </div>
    </div>
  );
}
