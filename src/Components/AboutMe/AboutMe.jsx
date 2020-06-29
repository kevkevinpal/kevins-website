import React from 'react';
import {aboutMeContent} from './aboutMeConstants.js';
import Pic from './Profile_pic.jpg';
import './AboutMe.css';

export const AboutMe = () => (
  <div class="Container  pb-3  d-flex justify-content-center align-content-center mr-4 ml-4">
    <div class="row AboutMe-RowContainer mt-4 ">
      <div class="col-12 col-md-4">
        <img src={Pic} class="AboutMe-Img" alt="Cinque Terre" />
      </div>

      <div class="col-12 col-md-8  ml-md-0 ">
        <br />
        {aboutMeContent.map(elm => (
          <h5 class="d-flex ListItem text-left">{elm}</h5>
        ))}
        <span class="d-flex justify-content-start">
          <a href="https://www.github.com/kevkevinpal" style={{color: 'green'}}>
            Github
          </a>
          <b3 class="ml-1 mr-1">/</b3>
          <a href="https://twitter.com/KevKevPal" style={{color: 'green'}}>
            Twitter
          </a>

          <b3 class="ml-1 mr-1">/</b3>

          <a
            href="https://www.linkedin.com/in/kevin-pallikunnel/"
            style={{color: 'green'}}>
            LinkedIn
          </a>
        </span>
      </div>
    </div>
  </div>
);
