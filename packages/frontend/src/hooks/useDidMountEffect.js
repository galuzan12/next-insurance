import {useEffect, useRef} from 'react';

// hook that will not run the useEffect cb in the first render
const useDidMountEffect = (cb, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      cb();
    } else {
      didMount.current = true;
    }
  }, deps);
};

export default useDidMountEffect;
