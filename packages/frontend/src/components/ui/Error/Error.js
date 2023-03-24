import PropTypes from 'prop-types';

import * as S from './Error.style';

const Error = ({text}) => {
  return <S.Error>{text}</S.Error>;
};

Error.propTypes = {
  text: PropTypes.string
};

export default Error;
