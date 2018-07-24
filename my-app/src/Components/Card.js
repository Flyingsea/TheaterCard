import React, { Component } from 'react';
import './Card.css';
var clearBr ={
  clear: 'both'
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


function replaceSpaces(x) {
    return x.toString().replace(" ", " ");
}

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventData: []
    }
    this.state.eventData = this.props.eventData;
    console.log (this.state.eventData.event.image.headingPrimaryS.url)
}


  render() {
    let imgUrl = this.state.eventData.event.image.headingPrimaryS.url
    let style = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
      <div className="theaterCard">
        <div className="eventRating">{this.state.eventData.event.userRating.overall.value}</div>
          <div className="cardCover">


              <div className="cardCoverBg" style={style}></div>

          </div>
          <div className="eventTitle">{this.state.eventData.event.title}
  </div>
          <div className="eventDescripion">{this.state.eventData.event.argument}</div>
          <div className="eventPlace">{this.state.eventData.scheduleInfo.placePreview}, <div className="eventTime">{replaceSpaces(this.state.eventData.scheduleInfo.preview.text)}</div></div>

          <div className="eventPrice">от {numberWithSpaces(this.state.eventData.event.tickets[0].price.min/100)} ₽</div>
          <br style={clearBr} />
      </div>
    );
  }
}

export default Card;
