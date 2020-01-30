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
      <section>
        <Nav />
        <Header />
        <svg viewBox="0 0 1695 72" preserveAspectRatio="none">
          <path d="M0 0c282.5 45 565 67.5 847.5 67.5S1412.5 45 1695 0v72H0V0z" fill="#F6F6F6" fill-rule="evenodd"></path>
        </svg>
        <Features />
        <About />
        <FAQ />
        <Footer />
      </section>
    )
  }
}


export default App;
