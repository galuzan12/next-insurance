import PropTypes from 'prop-types';
import {useContext, useState} from 'react';

import {PAGINATION} from '../../../config/constants';
import useDidMountEffect from '../../../hooks/useDidMountEffect';
import {useMovies} from '../../../hooks/useMovies';
import {useTranslations} from '../../../hooks/useTranslations';
import {ModalContext} from '../../../providers/ModalProvider/ModalContext';
import Error from '../Error/Error';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';
import Scrollable from '../Scrollable/Scrollable';
import * as S from './Movies.style';

export const Movies = ({searchString}) => {
  const {movies, isLoading, error, searchMovie} = useMovies();
  const [pagination, setPagination] = useState(0);
  const {showModal} = useContext(ModalContext);
  const t = useTranslations('movies');

  // since we dont want to invoke searchMovie on the first render
  useDidMountEffect(() => {
    searchMovie(searchString);
  }, [searchString]);

  const handleCardClick = movie => {
    showModal(<MovieModal movie={movie} />);
  };

  const handlePaggination = () => {
    const updatedPagination = pagination + PAGINATION;
    if (movies.length > updatedPagination) {
      setPagination(updatedPagination);
    }
  };

  return (
    <Scrollable onBottom={handlePaggination}>
      <S.Movies>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <Error text={error.message} />
        ) : (
          <S.CardsContainer>
            {movies.length ? (
              movies
                .slice(0, pagination + PAGINATION)
                .map(movie => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => handleCardClick(movie)}
                  />
                ))
            ) : (
              <>{searchString && <Error text={t.noMoviesSearchResultTxt} />}</>
            )}
          </S.CardsContainer>
        )}
      </S.Movies>
    </Scrollable>
  );
};

Movies.propTypes = {
  searchString: PropTypes.string
};

export default Movies;
