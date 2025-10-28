import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (callback) => {
  const ctx = useRef(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      callback();
    });
    return () => ctx.current?.revert();
  }, [callback]); // ← callback is stable when passed from a component
};