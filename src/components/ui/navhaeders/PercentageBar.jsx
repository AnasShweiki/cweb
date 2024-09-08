"use client"; // top to the file

import { motion } from 'framer-motion';

const PercentageBar = ({ title, percentage }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ marginBottom: '0.5rem' }}>{title}</div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundColor: '#4caf50',
          height: '1rem',
          borderRadius: '0.5rem',
          width: '100%',
          position: 'relative',
          marginBottom: '0.5rem'
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '0',
            color: '#fff',
            padding: '0 0.5rem',
            lineHeight: '1rem'
          }}
        >
          {percentage}%
        </div>
      </motion.div>
    </div>
  );
};

export default PercentageBar;
