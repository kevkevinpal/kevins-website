import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Resume from './Components/Resume/Resume'

import 'bootstrap/dist/css/bootstrap.css'
class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        currentPage: 'work',
      }
    
    }
    

  changePage(buttonName) {
    console.log(buttonName)
    switch(buttonName){
        case 'Work':
            this.setState({currentPage: 'Work'})
            break;
        case 'Contact':
            this.setState({currentPage: 'Contact'})
            break;
        case 'Resume':
            this.setState({currentPage: 'Resume'})
            break;
        case 'Home':
            this.setState({currentPage: 'Home'})
            break;

    }
  }

  renderPage(pageName) {
    switch(pageName){
      case 'Work':
          return <Work />
          break;
      case 'Contact':
          return <Contact />
          break;
      case 'Resume':
          return <Resume />
          break;
      case 'Home':
          return <Home />
          break;

    }
  }

  
  render() {
    return (
      <div className="App">
        <NavBar changePage={ this.changePage.bind(this) } />
       {this.renderPage(this.state.currentPage)}
      
      </div>
    );
  }
}

export default App;
