import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class Section extends Component {
    render() {
        const movies = _.orderBy(this.props.movies, m => -m.rating)
        return <div className="Section">
        <div className="SectionTitle">
          <div className="Subheader">
            <h1>{this.props.name}</h1></div>
        </div>
        {movies.map(movie =>
            <Movie
                key={movie.alias}
                movie={movie}
            />
        )}
      </div>
    }
}

class Card extends Component {
    render() {
        let {
            title, year, rating, duration, poster, alias
        } = this.props.movie

        return <Link to={`/film/${alias}`} className="swiper-slide filmSlide">
            <div>
                <div className="filmCover" style={{backgroundImage: `url('media/${poster}')`}}>
                <div className="filmLength">{moment.unix(duration).utc().format('HH:mm')}</div>
                </div>
                <div className="filmTitle">{title}</div>
                <div className="filmRaing">{year} — {rating.toFixed(1)}</div>
            </div>
        </Link>
    }
}
