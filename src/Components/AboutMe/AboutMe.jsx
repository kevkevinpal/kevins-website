import React from 'react';
import {aboutMeContent} from './aboutMeConstants.js';
import Pic from './Profile_pic.jpg';
import './AboutMe.css';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showImg() {}
  render() {
    return (
      <div class="Container AboutMe-Container pb-3  d-flex justify-content-center">
        <div class="row AboutMe-RowContainer mt-4">
          <div class="col-12 col-md-4" >
            <img src={Pic} class="AboutMe-Img" alt="Cinque Terre" />
          </div>

          <div class="col-12 col-md-8  ml-md-0 ml-4">
            <br />
              {aboutMeContent.map(elm => (
                <b class="d-flex ListItem align-content-start ">{elm}</b>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
