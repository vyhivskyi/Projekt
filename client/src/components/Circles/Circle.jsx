import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Circle = ({ size, position, isVisible, imageURL }) => {
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
        backgroundColor: '#292F36',
        position: 'absolute',
        overflow: 'hidden',
      }}
      >
        <img
          src={imageURL}
          alt="Circle Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }}
      />
      </motion.div>
  );
};

export default Circle;
