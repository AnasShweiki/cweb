import { useState, useEffect } from 'react';
import HomeTabNav from "../../components/ui/navhaeders/navlinks";
import styles from "../../app/styles.module.css";
import PersonCard from './PersonCard/PersonCardd';
import AnimatedTabs from "../Taps/job/page";

const Component = () => {
  const [selectedTab, setSelectedTab] = useState('about-me'); // Default tab

  const handleTabChange = (key:string) => {
    setSelectedTab(key);
  };
  const [width, setWidth] = useState(0); // Initialize width to 0

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(`The width of the screen is ${width}px`);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <HomeTabNav onTabChange={handleTabChange} /> {/* Pass handleTabChange function */}
        </div>
        <div className={styles.PersonCard}>
          <PersonCard />
        </div>
        <div className={styles.Tabs}>
          <AnimatedTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
        </div>
      </div>
    </div>
  );
};

export default Component;
