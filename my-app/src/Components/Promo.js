import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Promo.css';

class PromoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promoList: []
    }
    this.state.cardsList = this.props.cardsList;
    console.log (this.state.cardsList)
}
  render() {
    return (
      <
    );
  }
}
class PromoCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promoList: []
    }
    this.state.cardsList = this.props.cardsList;
    console.log (this.state.cardsList)
}
  render() {
    return (
      <Carousel
      width="1260px"
      framePadding="0px 20px 0px 20px"
      slidesToShow="1"
      slidesToScroll="3"
      renderBottomCenterControls={({ currentSlide }) => (<div></div>)}
      renderCenterRightControls={({ nextSlide }) => (
      <div className="btn-slider" onClick={nextSlide}><span className="icon-back"></span></div>)}
      renderCenterLeftControls={({ previousSlide }) => (
      <div className="btn-slider-back" onClick={previousSlide}><span className="icon-back"></span></div>)}
      >
      {
        this.state.cardsList.map(event => event && <Card
          eventData={event}
        />)}

      </Carousel>
    );
  }
}
export default PromoCard;
export default PromoCarousel;
