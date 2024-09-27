// components/Resume.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './skills.module.css'; // Import the CSS module

const skills = [
  { title: 'web development', value: 91 },
  { title: 'backEnd', value: 82 },
  { title: 'data base', value: 82 },
  { title: 'Front End', value: 85 },
  { title: 'react Native', value: 98 },
];

const education = [
  { date: '2024', title: 'lerlearn computer science ', location: 'HAC', description: 'I started learning computer science' },
  { date: '2022 - 2023', title: 'FullStack', location: 'CodeZone_tira', description: 'FullStack development,App&Web' },
  { date: '2020 - 2021', title: 'high school', location: 'jerusalem_El-Rashidiya ', description: 'Attended high school in Jerusalem - El-Rashidiya, gaining a well-rounded education and developing academic, social, leadership, creative, and technological skills through various activities.' },
];

const experience = [
  { date: '2022', title: 'Demo Tesla app ', description: 'The Tesla app lets users remotely control their cars monitor their status, see the cars location on a map, and manage Tesla energy products and trips.' },
  { date: '2023', title: 'StorDelivery app', description: 'Delivery app lets users order and track food or other items for delivery, with options to browse, pay, and monitor the delivery status in real-time.' },
  { date: '2024', title: 'CWeb',  description: ' website that showcases my skills, accomplishments, and professional development, while providing detailed explanations of my work and achievements.' },
];

const RSkills = () => {
  return (
    <div className={styles.tabContentWrapper}>
      <motion.div
        className={styles.pageTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
            
      </motion.div>
      <div className={styles.basicInformationWrapper}>
        <div className={styles.basicInformation}>1 year in design</div>
        <div className={styles.basicInformationDivider}>/</div>
        <div className={styles.basicInformation}>2 years Incoding</div>
        <div className={styles.basicInformationDivider}>/</div>
        <div className={styles.basicInformation}>1 year in Midlevel</div>
        </div>
      <p className={styles.homeMainInfo}>
        Web Developer with 2 years of experience in designing and developing user interfaces, testing, debugging, and training staff within eCommerce technologies. Proven ability in optimizing web functionality that improves data retrieval and workflow efficiencies.
      </p>
      <div className={styles.homeDivider}></div>
      <div className={styles.homeskillstitlewrapper}>
        <Image
          src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/629db8d7ec16c918444359cc_Frame-1.svg"
          alt="icon"
          className={styles.homeSkillsTitleIcon}
          width={32}
          height={32}
        />
        <h3 className={styles.homeSectionTitle}>Skills</h3>
      </div>
      
      <div className={styles.homeProgressBarWrapper}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className={styles.homeProgressBarItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            
            <div className={styles.homeProgressBarTitle}>{skill.title}</div>
            <div className={styles.homeProgressBarNumber}>{skill.value}%</div>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBarGrayLine}></div>
              <div
                style={{ width: `${skill.value}%`, height: '4px' }}
                className={styles[`progressBar-${skill.value}`]}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.homeDivider}></div>
      <div className={styles.homeWorkWrapper}>
        <div className={styles.homeWorkBlock}>
          <div className={styles.homeWorkTitleWrapper}>
            <Image
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/629db8d4c90e9781493b0789_Icon-skills-graduation-1.svg"
              alt="icon"
              className={styles.homeWorkTitleIcon}
              width={24}
              height={24}
            />
            <h4 className={styles.homeSectionSubtitle}>Education</h4>
          </div>
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              className={styles.homeWorkContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.homeWorkSubtitle}>{edu.date}</div>
              <h5 className={styles.homeWorkHeading}>{edu.title}</h5>
              <div className={styles.homeWorkSubtitleGray}>{edu.location}</div>
              <p className={styles.pText}>{edu.description}</p>
            </motion.div>
          ))}
        </div>
        <div className={styles.homeWorkBlock}>
          <div className={styles.homeWorkTitleWrapper}>
            <Image
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/629db8d4b612212af587c9de_Icon-skills-suitecase-1.svg"
              alt="icon"
              className={styles.homeWorkTitleIcon}
              width={24}
              height={24}
            />
            <h4 className={styles.homeSectionSubtitle}>Experience</h4>
          </div>
          {experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={styles.homeWorkContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.homeWorkSubtitle}>{exp.date}</div>
              <h5 className={styles.homeWorkHeading}>{exp.title}</h5>
              <p className={styles.pText}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RSkills;
