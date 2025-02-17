import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
