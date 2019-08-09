import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
   
    
   button(name){
        return(
            <div class="NavBar-Button" onClick={() => this.props.changePage(name)}>
                {name}
            </div>
        )
   }

    render(){
        

        return(
            <div class="container-flex">
                <div class="row">

                    <div class="row col-4 NavBar-HomeButton pl-4">
                        {this.button('Home')}
                    </div>
                    
                    <div class="row col-8 NavBar-Row">
                        {this.button('Resume')}
                        {this.button('Work')}
                        {this.button('Contact')}
                    </div>
                    
                </div>
            </div>
            


        );
    }
}
export default NavBar