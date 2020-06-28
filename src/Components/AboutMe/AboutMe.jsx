import React from 'react';
import {aboutMeContent} from './aboutMeConstants.js';
import Pic from './Profile_pic.jpg';
import './AboutMe.css';

export const AboutMe = () => (

      <div class="Container  pb-3  d-flex justify-content-center align-content-center mr-4 ml-4">
        <div class="row AboutMe-RowContainer mt-4 ">
          <div class="col-12 col-md-4" >
            <img src={Pic} class="AboutMe-Img" alt="Cinque Terre" />
          </div>

          <div class="col-12 col-md-8  ml-md-0 ">
            <br />
              {aboutMeContent.map(elm => (
                <h5 class="d-flex ListItem text-left">{elm}</h5>
              ))}
          </div>
        </div>
      </div>
    );
