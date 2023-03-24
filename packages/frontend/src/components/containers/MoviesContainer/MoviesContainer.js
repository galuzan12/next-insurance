import {useState} from 'react';

import {useTranslations} from '../../../hooks/useTranslations';
import Movies from '../../ui/Movies/Movies';
import SearchInput from '../../ui/SearchInput/SearchInput';
import * as S from './MoviesContainer.style';

export const MoviesContainer = () => {
  const t = useTranslations('movies');
  const [searchString, setSearchString] = useState('');

  const handleSearchChange = value => {
    setSearchString(value);
  };

  return (
    <S.MoviesContainer>
      <S.Title>{t.title}</S.Title>
      <SearchInput
        value={searchString}
        placeholder={t.searchPlaceholder}
        onChange={handleSearchChange}
      />
      <Movies searchString={searchString} />
    </S.MoviesContainer>
  );
};

export default MoviesContainer;
