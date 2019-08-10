import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './AboutMe'
import Form from './Form'
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div class='Container'>
                <div class='row'>
                    <div  class='col-6'>
                        <AboutMe/>
                    </div>
                    <div class='col-6'>
                    <Form />
                    </div>
                    
                </div>
                
            </div>

        );
    }
}
export default Contact