import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie ({id, year, title, summary, poster, genres}) {
  // ※ Movie 컴포넌트에서는 state를 필요로 하지 않음 → class 컴포넌트가 될 필요 없음 → function 컴포넌트로~
  
  return (
    // Link를 통해 Detail 라우터로 movie 정보 전달
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year: year,
        title: title,
        summary: summary,
        poster: poster,
        genres: genres
      }
    }}>
      <div className="movie">
        <img src={poster} alt={`${title} poster`} style={{ border: "2px solid darkgray"}}/>
        <div className="movie-info">
          <h2 className="movie-title">{title} (<span title="year">{year}</span>)</h2>
          <ul className="movie-genres">{genres.map((genre, idx) => <li key={idx}>{genre}</li>)}</ul>
          <p className="movie-summary">{summary.slice(0, 150)}...</p>
        </div>
      </div>
    </Link>
  )
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;