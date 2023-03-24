import PropTypes from 'prop-types';
import {useContext} from 'react';
import {isMobile} from 'react-device-detect';

import {ReactComponent as ArrowLeftIcon} from '../../../assests/arrow-left.svg';
import {useTranslations} from '../../../hooks/useTranslations';
import {ModalContext} from '../../../providers/ModalProvider/ModalContext';
import {prettifyTime} from '../../../utils/strings';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import * as S from './MovieModal.style';

const MovieModal = ({movie}) => {
  const t = useTranslations('movieModal');
  const {hideModal} = useContext(ModalContext);

  const handleBackToList = () => {
    hideModal();
  };

  return (
    <S.MovieModalContainer>
      <S.MovieModalLeft>
        <S.MovieImage src={movie.largeimage}></S.MovieImage>
      </S.MovieModalLeft>
      <S.MovieModalRight>
        <S.MovieModalHeaders>
          <S.MovieModalTitle dangerouslySetInnerHTML={{__html: movie.title}} />
          <S.MovieModalRuntime>
            {prettifyTime(movie.runtime)}
          </S.MovieModalRuntime>
          {movie.rating && (
            <S.MovieModalRating>
              <Rating rating={`${movie.rating} / 10`} />
            </S.MovieModalRating>
          )}
        </S.MovieModalHeaders>
        <S.MovieModalDescription
          dangerouslySetInnerHTML={{__html: movie.synopsis}}
        />
        <S.MovieModalButton>
          <Button
            text={t.buttonTxt}
            iconLeft={
              <ArrowLeftIcon
                style={{width: isMobile ? '1.25rem' : '1.5625rem'}}
              />
            }
            onClick={handleBackToList}
          />
        </S.MovieModalButton>
      </S.MovieModalRight>
    </S.MovieModalContainer>
  );
};

MovieModal.propTypes = {
  movie: PropTypes.object
};

export default MovieModal;
