import React, { useRef } from "react";

import { Grouper, Title, Navigate, MoviesWrapper, Image } from "./styles";
// import Movie from "../Movie/index";
import { IMovie } from "../../api/entity";

const MoviesSection: React.FC<{ title: string; movies: IMovie[] }> = ({
  title,
  movies,
}) => {
  const moviesRef: any = useRef();

  let width: number = window.innerWidth;

  const scrollLeft = () => {
    moviesRef.current.scrollLeft += width;
  };

  const scrollRight = () => {
    moviesRef.current.scrollLeft -= width;
  };

  return (
    <>
      <Title>{title}</Title>
      <Grouper>
        <Navigate onClick={() => scrollRight()}>{"<"}</Navigate>
        <MoviesWrapper ref={moviesRef}>
          {movies &&
            movies.map((movie) => {
              return (
                <Image 
                  position={movies.indexOf(movie)}
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.name}
                ></Image>
              );
            })}
        </MoviesWrapper>
        <Navigate onClick={() => scrollLeft()} rightPosition>
          {">"}
        </Navigate>
      </Grouper>
    </>
  );
};

export default MoviesSection;
