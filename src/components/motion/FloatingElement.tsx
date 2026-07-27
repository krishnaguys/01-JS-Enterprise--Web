"use client";

import { motion } from "framer-motion";
import React from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 3,
  className,
}) => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
