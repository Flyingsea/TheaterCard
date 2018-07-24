import React, { Component } from 'react';
import './Section.css';
import CardsCarousel from './Carousel';
import request from './utils/request';

var clearBr ={
  clear: 'both'
}


class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionData: []
    }
    this.state.sectionData = this.props.data;
    console.log ('!!!')
    console.log (this.state.sectionData)
}

  render() {


    return (

      <div className="section">
        <h2>{this.state.sectionData.name}</h2>
        <div className="btn-blue">Смотреть всё<span className="icon"></span></div>
        <div className="slide">

          <CardsCarousel cardsList={this.state.sectionData.actualEvents.data}></CardsCarousel>
          <br style={clearBr}></br>
        </div>
      </div>
    );
  }
}

export default Section;
