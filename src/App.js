import React, { Component } from 'react';
import NavLink from './components/Nav.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav.js'
import Header from './components/Header.js';
import About from './components/About.js';
import Features from './components/Features.js';
import Footer from './components/Footer.js';
import FAQ from './components/FAQ.js';


class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Features />
        <FAQ />
        <Footer />
      </div>
    )
  }
}


export default App;
