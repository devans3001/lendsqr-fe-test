
import { useState, useEffect } from 'react';

type Viewport = {
  width: number;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl?: boolean; 
  xxl?: boolean;
};

export function useViewport(): Viewport {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return {
    width,
    sm: width >= 640,
    md: width >= 768,
    lg: width >= 1024,
    xl: width >= 1280,
    xxl: width >= 1536
  };
}
