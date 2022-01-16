import { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

export const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      node.style.cursor = 'pointer';

      return () => {
        //  cleanup
        node.style.cursor = 'unset';
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref]);

  return [ref, value];
};
