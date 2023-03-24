import {useEffect, useRef, useState} from 'react';

export const useFetch = cb => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const result = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await cb();

      if (error) {
        setError(error);
      } else {
        result.current = data;
        setError(null);
      }
    };

    setIsLoading(true);
    fetchData().then(() => {
      setIsLoading(false);
    });
  }, []);

  return {
    result: result.current,
    isLoading,
    error
  };
};
