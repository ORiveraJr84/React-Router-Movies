import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

export default function MovieCard({ movie, addToMovieList }) {
  const history = useHistory();

  const viewDetails = () => {
    history.push(`/movies/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={() => viewDetails()}>
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <Switch>
        <Route path="/movies/:id">
          <h3>Actors</h3>
          {movie.stars.map((star) => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </Route>
      </Switch>
    </div>
  );
}
