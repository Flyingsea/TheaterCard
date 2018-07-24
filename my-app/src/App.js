import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './Components/Section';

var clearBr ={
  clear: 'both'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
    var request = new XMLHttpRequest();
    request.open("GET", "events.json", false);
    request.send(null)
    this.state.events = JSON.parse(request.responseText)
}

  render() {

    return (
      <div className="wrapper">
        <div className="header"></div>
        <h1>Репертуар театров в Москве</h1>
        <div className="filters"></div>
        {
          this.state.events.map(event => event && <Section
            data={event}
          />)}
      </div>

    );
  }
}

export default App;
