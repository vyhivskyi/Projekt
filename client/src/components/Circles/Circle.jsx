import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Circle = ({ size, position, isVisible }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    if (isVisible) {
      controls.start({ x: position.x, y: position.y });
    }
  }, [controls, position, isVisible]);

  return (
    <motion.div
      initial={false}
      animate={controls}
      transition={{ duration: 2 }}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#292F36', // You can set your own styles
        position: 'absolute',
      }}
    />
  );
};

export default Circle;
