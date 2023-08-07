import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie ({year, title, summary, poster, genres}) {
  // ※ Movie 컴포넌트에서는 state를 필요로 하지 않음 → class 컴포넌트가 될 필요 없음 → function 컴포넌트로~
  return (
    <div className="movie">
      <img src={poster} alt={`${title} poster`} style={{ border: "4px solid darkgray"}}/>
      <div className="movie-info">
        <h2 className="movie-title">{title} (<span title="year">{year}</span>)</h2>
        <ul className="genres">{genres.map((genre, idx) => <li key={idx}>{genre}</li>)}</ul>
        <p className="movie-summary">{summary}</p>
      </div>

    </div>
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