"use client";
import { motion } from "framer-motion";
export default function Template({ children }) {
  return (
    <motion.div animate={{ opacity: [0, 100] }} transition={{ duration: 2 }}>
      {children}
    </motion.div>
  );
}
