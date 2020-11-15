import React from 'react';
import ReactDOM from 'react-dom';
import {experienceInfo} from './experienceConstants.js';
const _renderExperienceInfo = () => {
  return experienceInfo.map(info => (
    <div class="align-self-start text-left mb-4">
      <div class="row mr-2">
        <h5 class="col-12 col-md">{info.title}</h5>
        <h5 class="ml-4 ml-md-0">{info.timeRange}</h5>
      </div>
      <h5 class="ml-2">{info.organization}</h5>
      {info.description.map(details => (
        <b4 class="ml-4 d-block" dangerouslySetInnerHTML={{__html: '- '+ details}} />
      ))}
    </div>
  ));
};

export const Experience = () => (
  <div class="ExperienceContainer ml-4 mr-4">
    <h4 class="d-flex align-self-start ">Experience</h4>
    <hr style={{backgroundColor: 'white'}} />
    {_renderExperienceInfo()}
  </div>
);
