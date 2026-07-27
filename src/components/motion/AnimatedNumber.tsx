"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  delay?: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {value.toLocaleString()}{suffix}
      </motion.span>
    </motion.div>
  );
};
