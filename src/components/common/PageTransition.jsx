import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('page-enter-active');
    el.classList.add('page-enter');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('page-enter-active');
        el.classList.remove('page-enter');
      });
    });
  }, [location.pathname]);

  return <div ref={ref}>{children}</div>;
}
