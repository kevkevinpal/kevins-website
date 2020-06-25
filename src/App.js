import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Resume from './Components/Resume/Resume'
import Footer from './Components/Footer/Footer'
import AboutMe from './Components/AboutMe/AboutMe'
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


  
  render() {
    return (
      <div className="App">
        <NavBar changePage={ this.changePage.bind(this) } currentPage={this.state.currentPage}/>
        <div class="mx-auto MainSection" >
          <AboutMe />
          <Work />
          <Resume />
          <Contact />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
