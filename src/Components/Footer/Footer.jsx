import React from 'react';
import './Footer.css'


class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div class='Container Contact-Container'>
                <div class='row Footer-Row'>
                    <div  class='col-4'>
                        Test
                    </div>
                    <div class='col-4'>
                        oapallikunnel@gmail.com
                    </div>
                    <div class='col-4'>
                        Social Media
                    </div>
                    
                </div>
                
            </div>

        );
    }
}
export default Footer