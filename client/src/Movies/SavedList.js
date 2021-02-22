import React from 'react';
import { useHistory, Link, NavLink } from 'react-router-dom'

export default function SavedList(props) {
  let history = useHistory();

  const goHome = () => history.push('/')

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink className="saved-movie" 
        activeClassName="saved-active"
        key={movie.id} to={`/movies/${movie.id}`}>
          {movie.title}
        </NavLink>
      ))}
      <div className="home-button" onClick={goHome}>
        Home
      </div>
    </div>
  );
}
