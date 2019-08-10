import React from 'react';
import ReactDOM from 'react-dom';
import Pic from "./Profile_pic.jpg";
import './AboutMe.css';


class AboutMe extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    bigCircleForFace() {

    }
    render(){
        return(
            <div class="container">            
                <img src={Pic} class="AboutMe-Img" alt="Cinque Terre"/> 
            
            </div>
            

        );
    }
}
export default AboutMe