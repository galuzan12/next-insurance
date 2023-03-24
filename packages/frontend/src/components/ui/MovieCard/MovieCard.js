import PropTypes from 'prop-types';
import {  isMobile } from 'react-device-detect';

import {ReactComponent as ArrowRightIcon} from '../../../assests/arrow-right.svg';
import {useTranslations} from '../../../hooks/useTranslations';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import * as S from './MovieCard.style';

const MovieCard = ({movie, onClick}) => {
  const t = useTranslations('movies.card');

  return (
    <S.CardContainer>
      <S.CardImgContainer>
        <S.CardImg src={movie.image}></S.CardImg>
      </S.CardImgContainer>
      <S.CardTitle>
        <S.Title dangerouslySetInnerHTML={{__html: movie.title}}></S.Title>
        <S.Released> ({movie.released})</S.Released>
      </S.CardTitle>
      <S.BottomCard>
        {movie.rating && <Rating rating={movie.rating} />}
        <Button
          text={t.cardButtonTxt}
          iconRight={<ArrowRightIcon style={{width: isMobile ? '1.25rem' : '1.5625rem'}}/>}
          onClick={onClick}
        />
      </S.BottomCard>
    </S.CardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  onClick: PropTypes.func
};

export default MovieCard;
