import React, { useState } from "react";

import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";

import { useMovies } from "./MovieProvider";

type NewMovieMode = "BUTTON" | "FORM";

export const MovieList = () => {
  const { movies, moviesDispatch } = useMovies();
  const [displayOptionType, setDisplayOptionType] = useState("button");
  const [creating, setCreating] = useState(false);

  // TODO: Display list of movies
  const addMovie = (movie: any) => {
    moviesDispatch({
      type: "add",
      payload: {
        movie: {
          ...movie,
          id: "new_movie",
          rating: [],
        },
      },
    });
    setCreating(false);
  };
  return (
    <div className="card-deck">
      {movies.map((movie) => (
        <Card key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </Card>
      ))}
      <Card>
        {/* TODO: Implement displaying appropriate card for add movie - button or form */}
        {/* TODO: use AddMovieButton and AddMovieForm */}
        {!creating && (
          <AddMovieButton
            onClick={() => {
              setCreating(true);
            }}
          />
        )}
        {creating && (
          <AddMovieForm
            onSubmit={addMovie}
            onCancel={() => setCreating(false)}
          />
        )}
      </Card>
    </div>
  );
};
