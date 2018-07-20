import React, { Component } from 'react';
import './Section.css';
import CardsCarousel from './Carousel';

var clearBr ={
  clear: 'both'
}

class Section extends Component {
  render() {
    return (
      <div className="section">
        <h2>В ближайшие дни</h2>
        <div className="btn-blue">Смотреть всё<span className="icon"></span></div>
        <div className="slide">
          <CardsCarousel></CardsCarousel>
          <br style={clearBr}></br>
        </div>
      </div>
    );
  }
}

export default Section;
