import React from 'react';
import ReactDOM from 'react-dom';
import './Bio.css';
import {workBodyText} from './bioConstants.js';
export const Bio = () => (
  <div class="Work-Container ml-4 mr-4">
    <h4 class="d-flex align-self-start">Bio</h4>
	<hr style={{backgroundColor: "white"}} />
    <div>
      {workBodyText.map(elm => (
        <p class="text-left">{elm}</p>
      ))}
    </div>
  </div>
);
