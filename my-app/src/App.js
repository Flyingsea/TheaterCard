import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './Components/Section';

var clearBr ={
  clear: 'both'
}

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header"></div>
        <h1>Репертуар театров в Москве</h1>
        <div className="filters"></div>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
      </div>

    );
  }
}

export default App;
