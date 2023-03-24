import PropTypes from 'prop-types';

import * as S from './Button.style';

const Button = ({text, iconLeft, iconRight, onClick, ...props}) => {
  return (
    <S.CardButton onClick={onClick} {...props}>
      {iconLeft}
      <S.ButtonText>{text}</S.ButtonText>
      {iconRight}
    </S.CardButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  onClick: PropTypes.func
};

export default Button;
