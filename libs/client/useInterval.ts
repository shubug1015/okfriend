import { useEffect } from 'react';

const useInterval = (callback: () => void, delay: number) => {
  useEffect(() => {
    if (delay !== null) {
      let timer = setInterval(callback, delay);
      return () => clearInterval(timer);
    }
  }, [callback, delay]);
};

export default useInterval;
