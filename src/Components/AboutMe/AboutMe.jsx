import React from 'react';
import {aboutMeContent} from './aboutMeConstants.js';
import Pic from './Profile_pic.jpg';
import './AboutMe.css';
import {ReactComponent as TwitterLogo} from './twitterLogo.svg';
import {ReactComponent as GithubLogo} from './githubLogo.svg';

import {ReactComponent as LinkedInLogo} from './linkedInLogo.svg';
import {ReactComponent as MediumLogo} from './mediumLogo.svg';

export const AboutMe = () => (
  <div class="Container  pb-3  d-flex justify-content-center align-content-center mr-4 ml-4">
    <div class="row AboutMe-RowContainer mt-4 ">
      <div class="col-12 col-md-4">
        <img src={Pic} class="AboutMe-Img" alt="Cinque Terre" />
      </div>
      <div class="col-12 col-md-8  ml-md-0 ">
        <br />
        {aboutMeContent.map(elm => (
          <h5
            class="d-flex ListItem text-left"
            dangerouslySetInnerHTML={{__html: elm}}
          />
        ))}
        <span class="d-flex justify-content-start align-items-center">
          <a href="https://www.github.com/kevkevinpal" style={{color: 'green'}}>
            <GithubLogo fill="green" width="25px" height="25px" />
          </a>
          <a href="https://twitter.com/KevKevPal">
            <TwitterLogo width="40px" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-pallikunnel/">
            <LinkedInLogo fill="green" height="25px" width="25px" />
          </a>
          <a style={{paddingLeft: "8px"}} href="https://medium.com/@oapallikunnel">
            <MediumLogo />
          </a>
        </span>
      </div>
    </div>
  </div>
);
