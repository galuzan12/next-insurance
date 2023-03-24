import PropTypes from 'prop-types';

import {ReactComponent as StarIcon} from '../../../assests/star.svg';
import * as S from './Rating.style';

const Rating = ({rating}) => {
  return (
    <S.CardRating>
      <StarIcon style={{height: 'auto'}} />
      <S.RatingText>{rating}</S.RatingText>
    </S.CardRating>
  );
};

Rating.propTypes = {
  rating: PropTypes.string
};

export default Rating;
