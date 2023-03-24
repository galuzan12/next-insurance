import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';

import useOnScreen from '../../../hooks/useOnScreen';
import * as S from './Scrollable.style';

const Scrollable = ({onBottom, children}) => {
  const pRef = useRef(null);
  const isPVisible = useOnScreen(pRef);

  useEffect(() => {
    isPVisible && onBottom();
  }, [isPVisible]);

  return (
    <S.Scrollable>
      {children}
      <S.HiddenP ref={pRef}>
        end of page -- once the user will reach this place - load more movie
      </S.HiddenP>
    </S.Scrollable>
  );
};

Scrollable.propTypes = {
  onBottom: PropTypes.func,
  children: PropTypes.node
};

export default Scrollable;
