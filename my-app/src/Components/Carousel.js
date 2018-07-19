import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class CardsCarousel extends Component {
  render() {
    return (
      <Carousel>
        <img src="http://placehold.it/1000x400/333333/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/333333/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/333333/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/333333/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/333333/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/333333/c0392b/&text=slide6" />
      </Carousel>
  );
}
}

export default CardsCarousel;
