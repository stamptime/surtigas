import React, { useRef } from "react";
import { motion, animate, useInView } from "motion/react";

interface MotionNumberProps {
  from: number;
  to: number;
  duration?: number; // Animation duration in seconds
}

const MotionNumber: React.FC<MotionNumberProps> = ({
  from,
  to,
  duration = 1,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // Re-triggers on each entry

  React.useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => {
          ref.current!.textContent = Math.round(value).toString();
        },
      });

      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <motion.span ref={ref} />;
};

export default MotionNumber;
