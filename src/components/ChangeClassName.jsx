import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

export function ChangeClassName({ enabled }) {
  // Change body class name
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);
    const btn = document.body.getElementsByTagName('button');
    // La anterior linea nos devuelve una lista con todos los elements
    // de tipo button.
    // Luego esa lista la convertimos en un array, al cual le pasamos
    // el método de forEach para que evalué cada item del array
    // y luego a cada element de la lista le pase la clase
    // no-cursor solo si enabled es verdadero.
    Array.from(btn).forEach((b) => b.classList.toggle('no-cursor', enabled));

    return () => {
      // cleanup method
      document.body.classList.remove('no-cursor');
      // Limpiamos e array de btn de la clase no-cursor
      Array.from(btn).forEach((b) => b.classList.remove('no-cursor'));
    };
  }, [enabled]);

  return null;
}

ChangeClassName.propTypes = {
  enabled: PropTypes.bool,
};
