import React from 'react';
import './Projects.css';
import {projectInfo} from './projectConstants.js';

const getTitle = (titleText, titleLink) => {
  if (!!titleLink) {
    return (
      <a style={{color: 'green'}} href={titleLink}>
        {titleText}
      </a>
    );
  }
  return titleText;
};

const _renderProjectInfo = () => {
  return projectInfo.map(project => (
    <div class="text-left">
	  <div class="row   mr-4 mr-md-auto d-flex justify-content-between">
      <h5 class="col-10 ">{getTitle(project.title, project.link)}</h5>
      <h5 class="col-2 col-md-auto">{project.date}</h5>
	  </div>
      <ul > {project.description.map(desc => (
        <li class="ml-2 d-block mb-1">- {desc}</li>
      ))}
	  </ul>
    </div>
  ));
};

export const Projects = () => (
  <div class="Container Contact-Container ml-4 mr-4">
    <h4 class="text-left">Projects</h4>
    <hr style={{backgroundColor: 'white'}} />
    {_renderProjectInfo()}
  </div>
);
