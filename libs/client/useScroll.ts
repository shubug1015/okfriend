import { useEffect, useState } from 'react';

// scroll y값 가져오는 함수
export const useScroll = () => {
  const [scroll, setScroll] = useState<{ y: number }>({
    y: 0,
  });
  const onScroll = () => {
    setScroll({
      y: window.scrollY,
    });
  };

  useEffect(() => {
    setScroll({ y: window.scrollY });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return scroll;
};
