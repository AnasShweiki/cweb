import Link from 'next/link';
import Image from 'next/image';
import styles from './navheaders.module.css'; // Ensure the path is correct
import { FC } from 'react';

interface HomeTabNavProps {
  onTabChange: (tabName: string) => void; // Define the type of the onTabChange prop
}

const HomeTabNav: FC<HomeTabNavProps> = ({ onTabChange }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.logoNav}>
        <Link href="/" className={styles.homeRn}>RN</Link>
      </div>
      <div className={styles.homeTabNav}>
        <Link href="/" className={styles.homeTabLink} onClick={() => onTabChange('about-me')}>
          <Image 
            src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/62972bd605b3a233e43abfdf_Icon-user-1.svg" 
            alt="User Icon" 
            width={24} 
            height={24}
          />
        </Link>
        <Link href="/" className={styles.homeTabLink} onClick={() => onTabChange('contact-us')}>
          <Image 
            src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/62972bd21411688a7fe2a8fe_Icon-cloud-1.svg" 
            alt="Cloud Icon" 
            width={24} 
            height={24}
          />
        </Link>
        <Link href="/" className={styles.homeTabLink} onClick={() => onTabChange('skills')}>
          <Image 
            src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/62972bd457b84d27a2773d89_Icon-pencil-1.svg" 
            alt="Pencil Icon" 
            width={24} 
            height={24}
          />
        </Link>
        <Link href="/" className={styles.homeTabLink} onClick={() => onTabChange('myWork')}>
          <Image 
            src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/62972ccd10f357338b402b11_Icon-suitecase-1.svg" 
            alt="Suitcase Icon" 
            width={24} 
            height={24}
          />
        </Link>
      </div>
      <a href="/" className={styles.downloadButton1}>
        <Image 
          src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/62972bd0ecfe8300b1f7c114_Icon-download-1.svg" 
          alt="Download Icon" 
          className={styles.downloadButton}
          width={24} 
          height={24}
        />
      </a>
    </div>
  );
};

export default HomeTabNav;
