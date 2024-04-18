import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

export function ChangeClassName({ enabled }) {
  // Change body class name
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);
    const btn = document.body.getElementsByTagName('button');
    Array.from(btn).forEach((b) => b.classList.toggle('no-cursor', enabled));

    return () => {
      // cleanup method
      document.body.classList.remove('no-cursor');
      Array.from(btn).forEach((b) => b.classList.remove('no-cursor'));
    };
  }, [enabled]);

  return null;
}

ChangeClassName.propTypes = {
  enabled: PropTypes.bool,
};
