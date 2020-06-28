import React from 'react';
import './Projects.css';
import {projectInfo} from './projectConstants.js';

const getTitle = (titleText, titleLink) => {
  if (!!titleLink) {
    return <a style={{color: 'green'}} href={titleLink}>{titleText}</a>;
  }
  return titleText;
};

const _renderProjectInfo = () => {
  return projectInfo.map(project => (
    <div class="text-left">
      <h5>{getTitle(project.title, project.link)}</h5>
      {project.description.map(desc => (
        <b4 class="ml-2 d-block mb-1">{desc}</b4>
      ))}
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
