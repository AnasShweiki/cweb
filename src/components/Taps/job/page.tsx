import React, { useState } from 'react';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './Tabs.module.css'; // Ensure correct path
import AboutMe from './djob/djob';
import RSkills from './skills/skills';
import ContactUs from './massinger/mass';
import Homepage from './MyWork/myWork';

interface AnimatedTabsProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const AnimatedTabs: React.FC<AnimatedTabsProps> = ({ selectedTab, onTabChange }) => {
  const [isVertical, setIsVertical] = useState<boolean>(true);

  // Handle tab change
  const handleChange = (key: string | number) => {
    onTabChange(key.toString()); // Convert key to string if necessary
  };

  // Event handler wrapper
  const handleTabChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    // Assuming `data-tab` is used to determine the tab key
    const tabKey = target.getAttribute('data-tab') || '';
    handleChange(tabKey);
  };

  return (
    <div className={styles.taps}>
      <div className={styles.tabs}>
        <Tabs
          aria-label="Options"
          isVertical={isVertical}
          selectedKey={selectedTab}
          onChange={handleTabChange} 
        >
          <Tab key="about-me" title=' ' data-tab="about-me">
            <TransitionGroup>
              <CSSTransition
                key={`about-me-${selectedTab}`}
                timeout={300}
                classNames={{
                  enter: styles['fade-enter'],
                  enterActive: styles['fade-enter-active'],
                  exit: styles['fade-exit'],
                  exitActive: styles['fade-exit-active'],
                }}
              >
                <Card>
                  <CardBody>

                    <AboutMe />

                  </CardBody>
                </Card>
              </CSSTransition>
            </TransitionGroup>
          </Tab>
          <Tab key="contact-us" title=' ' data-tab="contact-us">
            <TransitionGroup>
              <CSSTransition
                key={`contact-us-${selectedTab}`}
                timeout={300}

                classNames={{
                  enter: styles['fade-enter'],
                  enterActive: styles['fade-enter-active'],
                  exit: styles['fade-exit'],
                  exitActive: styles['fade-exit-active'],
                }}
              >
                <Card>
                  <CardBody>
                    <ContactUs />
                  </CardBody>
                </Card>
              </CSSTransition>
            </TransitionGroup>
          </Tab>
          <Tab key="skills" title=' ' data-tab="skills">
            <TransitionGroup>
              <CSSTransition
                key={`skills-${selectedTab}`}
                timeout={300}
                classNames={{
                  enter: styles['fade-enter'],
                  enterActive: styles['fade-enter-active'],
                  exit: styles['fade-exit'],
                  exitActive: styles['fade-exit-active'],
                }}
              >
                <Card>
                  <CardBody>
                    <RSkills />
                  </CardBody>
                </Card>
              </CSSTransition>
            </TransitionGroup>
          </Tab>
          <Tab key="myWork" title=' ' data-tab="myWork">
            <TransitionGroup>
              <CSSTransition
                key={`myWork-${selectedTab}`}
                timeout={300}
                classNames={{
                  enter: styles['fade-enter'],
                  enterActive: styles['fade-enter-active'],
                  exit: styles['fade-exit'],
                  exitActive: styles['fade-exit-active'],
                }}
              >
                <Card>
                  <CardBody>
                    <Homepage />
                  </CardBody>
                </Card>
              </CSSTransition>
            </TransitionGroup>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AnimatedTabs;
