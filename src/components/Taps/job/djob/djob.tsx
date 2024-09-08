import React from 'react';
import { motion } from 'framer-motion';
import styles from './djob.module.css'; // Ensure you create this CSS module
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className={styles.tabContentWrapper}>
      <motion.h1 
        className={styles.pageTitle} 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <div className={styles.basicInformationWrapper}>
        <div className={styles.basicInformation}>20 years</div>
        <div className={styles.basicInformationDivider}>/</div>
        <div className={styles.basicInformation}>Jerusalem</div>
        <div className={styles.basicInformationDivider}>/</div>
        <div className={styles.basicInformation}>FullStack developer</div>
      </div>
      <motion.p 
        className={styles.homeMainInfo} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
      >
        Prolific Full-Stack Web Developer with a strong passion for metrics and performance optimization. Proven track record in exceeding expectations as a former Full Stack Developer. Highly skilled in React, Next.js, and JavaScript, with robust back-end capabilities in Node.js. Extensive experience in both web and mobile development using React Native, delivering scalable, high-performance solutions.
      </motion.p>
      <div className={styles.homeDivider}></div>
      <motion.h3 
        className={styles.homeSectionTitle} 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h3>
      <div className={styles.homeServicesWrapper}>
        <div className={styles.homeServices}>
          <motion.div 
            className={styles.homeServicesCard} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/629790b4c074fa3b9e428c12_Icon-dev-1.svg" 
              alt="Development icon" 
              className={styles.image}
              width={50}  // Specify width
              height={50} // Specify height
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXppbmc9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXRhLXJlYWQtdG9saXplPSJub25lIiBzdHJva2Utb3BhY2l0eS1zY2FsZWRjYW5vPSJub25lIiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InNob3J0IiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjEiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtbG9uZ2l0dWQ9IjB4IiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InVubG9uZyIgc3Ryb2tlLXJhbmdlPSJtYSIgc3Ryb2tlLXJhbmdlPSJtaS1yYXYiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtc2VsZWN0b3I9InNldmVuIiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjIiIHN0cm9rZS1kYXRoYXJndGhpbnI9ImF1dG8iLz48L3N2Zz4=" // Placeholder data URL
            />
            <h5 className={styles.textWhite}>Development</h5>
            <p className={styles.pText}>Building a custom tailored solution based on your technical specification.</p>
          </motion.div>
          <motion.div 
            className={styles.homeServicesCard} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/629791c8ef43ef30384de0ff_Icon-rocket-1.svg" 
              alt="Front-End Development icon" 
              className={styles.image}
              width={50}  // Specify width
              height={50} // Specify height
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXppbmc9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXRhLXJlYWQtdG9saXplPSJub25lIiBzdHJva2Utb3BhY2l0eS1zY2FsZWRjYW5vPSJub25lIiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InNob3J0IiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjEiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtbG9uZ2l0dWQ9IjB4IiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InVubG9uZyIgc3Ryb2tlLXJhbmdlPSJtYSIgc3Ryb2tlLXJhbmdlPSJtaS1yYXYiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtc2VsZWN0b3I9InNldmVuIiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjIiIHN0cm9rZS1kYXRoYXJndGhpbnI9ImF1dG8iLz48L3N2Zz4=" // Placeholder data URL
            />
            <h5 className={styles.textWhite}>Front-End Development</h5>
            <p className={styles.pText}>Creating user-friendly interfaces and experiences using ReactJS, Next.js, CSS, JavaScript, and modern frameworks.</p>
          </motion.div>
          <motion.div 
            className={styles.homeServicesCard} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/629791c877a862e06c90e658_Icon-data-1.svg" 
              alt="Database icon" 
              className={styles.image}
              width={50}  // Specify width
              height={50} // Specify height
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXppbmc9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXRhLXJlYWQtdG9saXplPSJub25lIiBzdHJva2Utb3BhY2l0eS1zY2FsZWRjYW5vPSJub25lIiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InNob3J0IiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjEiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtbG9uZ2l0dWQ9IjB4IiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InVubG9uZyIgc3Ryb2tlLXJhbmdlPSJtYSIgc3Ryb2tlLXJhbmdlPSJtaS1yYXYiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtc2VsZWN0b3I9InNldmVuIiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjIiIHN0cm9rZS1kYXRoYXJndGhpbnI9ImF1dG8iLz48L3N2Zz4=" // Placeholder data URL
            />
            <h5 className={styles.textWhite}>Database</h5>
            <p className={styles.pText}>Designing, implementing, and optimizing databases to ensure data integrity and efficient access.</p>
          </motion.div>
          <motion.div 
            className={styles.homeServicesCard} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/629791c52a46d66b1ac51fb5_Icon-shield-1.svg" 
              alt="Back-End Development icon" 
              className={styles.image}
              width={50}  // Specify width
              height={50} // Specify height
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXppbmc9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXRhLXJlYWQtdG9saXplPSJub25lIiBzdHJva2Utb3BhY2l0eS1zY2FsZWRjYW5vPSJub25lIiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InNob3J0IiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjEiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtbG9uZ2l0dWQ9IjB4IiBzdHJva2Utb3BhY2l0eS1tZXRob2Q9InVubG9uZyIgc3Ryb2tlLXJhbmdlPSJtYSIgc3Ryb2tlLXJhbmdlPSJtaS1yYXYiIHN0cm9rZS1vcGFjaXR5LWxpbmVjYXAtc2VsZWN0b3I9InNldmVuIiBzdHJva2Utb3BhY2l0eS1sZW5ndGg9IjIiIHN0cm9rZS1kYXRoYXJndGhpbnI9ImF1dG8iLz48L3N2Zz4=" // Placeholder data URL
            />
            <h5 className={styles.textWhite}>Back-End Development</h5>
            <p className={styles.pText}>Building and maintaining the server-side logic, databases, and application functionality.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
