import PropTypes from 'prop-types';

import * as S from './SearchInput.style';

const SearchInput = ({value, placeholder, onChange}) => {
  return (
    <S.SearchInputContainer>
      <S.SearchInput
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      ></S.SearchInput>
    </S.SearchInputContainer>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchInput;
