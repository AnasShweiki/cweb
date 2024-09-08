import React, { useState } from 'react';
import HomeTabNav from "../../components/ui/navhaeders/navlinks";
import styles from "../../app/styles.module.css";
import PersonCard from './PersonCard/PersonCardd';
import AnimatedTabs from "../Taps/job/page";

const Component = () => {
  const [selectedTab, setSelectedTab] = useState('photos'); // Default tab

  const handleTabChange = (key:string) => {
    setSelectedTab(key);
  };

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
