import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ChangeClassName } from './ChangeClassName';

export function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Usando el hook useEffect
  // Pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    // cleanup:
    // -> Cuando el componente se desmonta
    // -> Cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => {
      // cleanup method
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  //De pendencias para el useEffect solo pueden ser:
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [dependencias] -> se ejecuta cuando cambia la dependencia y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  return (
    <>
      <ChangeClassName enabled={enabled} />
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir Puntero
      </button>
    </>
  );
}

FollowMouse.propTypes = {
  enabled: PropTypes.bool,
};
