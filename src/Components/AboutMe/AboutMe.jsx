import React from 'react';
import Pic from "./Profile_pic.jpg";
import './AboutMe.css'

class AboutMe extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    
    showImg(){

    }
    render(){
        return(
            <div class='Container AboutMe-Container'>
                
               
                <div class='row p-4 AboutMe-RowContainer'>
                    
                    <div class='col-12 col-md-6'>
                        <img src={Pic} class="AboutMe-Img" alt="Cinque Terre"/> 
                    </div>

                    <div class="col-12 col-md-6 AboutMe-TextBox p-3">
                        <h class='AboutMe-Header'>About Me</h>
                        <br />
                        <p class='AboutMe-Paragraph'>
                            I'm Kevin Pallikunnel, a Software Developer currently finishing up my double major of Computer Science and Mathematics
                            at Northern Illinois University. I am also currently interning at Discover Finacial Services as a Software Developer
                            working on mainly Frontend applications
                         </p>
                    </div>
                </div>
                 
            </div>

        );
    }
}
export default AboutMe