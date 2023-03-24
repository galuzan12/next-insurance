import {TailSpin} from 'react-loader-spinner';
import { capriColor } from '../../../config/colors';

import * as S from './LoadingSpinner.style';

const LoadingSpinner = () => {
  return (
    <S.LoadingSpinner>
      <TailSpin color={capriColor} height={100} width={100} />;
    </S.LoadingSpinner>
  );
};

export default LoadingSpinner;
