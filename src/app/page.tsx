"use client"; // top to the file
import Component from '@/components/ui/page'; // Ensure this path is correct
import React from 'react';
import { motion } from "framer-motion"
import styles from '../app/styles.module.css'
function Page() {
  return (
<div className='flex items-center justify-center min-h-screen w-full'>
      <Component  />
      </div>
  );
}

export default Page;
