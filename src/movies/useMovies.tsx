import React, { useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Movie, MoviesAction } from 'types';
import { getMovies } from 'api/movies';

interface MoviesState {
  movies: Movie[]
  initialized: boolean
}

export function useMoviesCollection(): [MoviesState, React.Dispatch<MoviesAction>] {
  // TODO: Implement all action processing

  const movieReducer = (state: MoviesState, action: MoviesAction): MoviesState => {
    switch (action.type) {
      case 'fetch':
        return { ...state, movies: action.payload.data, initialized: true };

      case 'add':
        return { ...state, movies: [
          ...state.movies,
          {
            ...action.payload.movie,
            id: "new_movie_" + state.movies.length,
            ratings: []
          }
        ]};

      case 'delete':
        const movies: Movie[] = (state.movies || []).filter(movie => movie.id !== action.payload.movieId);
        return { ...state, movies };

      case 'rate':
        const updated: Movie[] = (state.movies || []).map(item => {
          if (item.id === action.payload.movieId) {
            item.ratings.push(action.payload.rating);
          }
          return item;
        })
        
        return { ...state, movies: updated };

      default:
        return state
    }
  };

  const [state, dispatch] = useReducer(movieReducer, {
    movies: [],
    initialized: false,
  });

  useEffect(() => {
    // TODO: Call fetch action
    getMovies()
    .then((data: Movie[]) => {
      dispatch({ type: "fetch", payload: { data } });
    })
  }, []);

  return [state, dispatch];
}
