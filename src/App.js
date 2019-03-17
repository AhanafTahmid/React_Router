import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Headeryo from './components/header_area/header';
import Footer from './components/Footer_area/footer';
import Home from './components/Pages/home';
import About from './components/Pages/about';
import Dummy from './components/Pages/dummy';

class App extends Component {
  render() {
    return (
    <Router>
     <div className="App">
        <Headeryo/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/dummy' component={Dummy}/>
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
