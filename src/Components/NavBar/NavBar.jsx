import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';

class NavBar extends React.Component {
  //Creates a button with variable 'name'
  //then returns the button element
  button(name) {
    let passedVar = name;
    if (name === 'Home') passedVar = 'Kevin Pallikunnel';

    return (
      <div  class="NavBar-Button btn btn-secondary ml-2 mr-0">
        {passedVar}
      </div>
    );
  }

  render() {
    return (
      <div class="container-flex pt-0">
        <div class="row NavBar-BigRow ">
          <div class="NavBar-HomeButton pl-4">{this.button('Home')}</div>
        </div>
      </div>
    );
  }
}
export default NavBar;
