import {useEffect, useState} from 'react';

import {GET_MOVIES_URL} from '../config/envs';
import {debounce} from '../utils/general';
import {promiseHandler} from '../utils/promise';
import {useFetch} from './useFetch';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const {
    result: allMovies,
    isLoading,
    error
  } = useFetch(() => promiseHandler(GET_MOVIES_URL));

  useEffect(() => {
    allMovies && setMovies(allMovies);
  }, [allMovies]);

  const searchMovie = searchString => {
    debounce(() => {
      const filteredMovies = searchString
        ? allMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchString.toLowerCase())
          )
        : allMovies;

      setMovies(filteredMovies);
    });
  };

  return {
    movies,
    isLoading,
    error,
    searchMovie
  };
};
