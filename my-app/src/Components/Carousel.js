import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Card from './Card';
import './Carousel.css';

class CardsCarousel extends Component {

  render() {
    return (
      <Carousel

      width="1260px"
      framePadding="0px 20px 0px 20px"
      slidesToShow="3"
      slidesToScroll="3"
      heightMode="current"
      renderBottomCenterControls={({ currentSlide }) => (<div></div>)}
      renderCenterRightControls={({ nextSlide }) => (
      <div className="btn-slider" onClick={nextSlide}><span className="icon-back"></span></div>)}
      renderCenterLeftControls={({ previousSlide }) => (
      <div className="btn-slider-back" onClick={previousSlide}><span className="icon-back"></span></div>)}
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Carousel>
    );
  }
}

export default CardsCarousel;
