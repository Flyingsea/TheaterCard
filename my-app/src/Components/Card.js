import React, { Component } from 'react';
import './Card.css';
var clearBr ={
  clear: 'both'
}

class Card extends Component {
  render() {
    return (
      <div className="theaterCard">
          <div className="cardCover">
          <div className="eventRating">9.4</div>
          </div>
          <div className="eventTitle">Шагает солнце по бульварам
  </div>
          <div className="eventDescripion">Песни Окуджавы, Высоцкого, Таривердиева и других авторов...</div>
          <div className="eventPlace">Современник. Основная сцена, 18 сен</div>
          <div className="eventPrice">от 2 500 ₽</div>
          <br style={clearBr} />
      </div>
    );
  }
}

export default Card;
