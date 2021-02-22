import React from 'react';
import { useHistory } from 'react-router-dom'

import MovieCard from './MovieCard'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  let history = useHistory()
  const moreInfo = () => {
    history.push(`/movies/${id}`)
  }

  return (
    <MovieCard movie={props.movie} onClick={moreInfo}/>
    // <div className="movie-card" onClick={addHistory}>
    //   <h2>{title}</h2>
    //   <div className="movie-director">
    //     Director: <em>{director}</em>
    //   </div>
    //   <div className="movie-metascore">
    //     Metascore: <strong>{metascore}</strong>
    //   </div>
    // </div>
  );
}
