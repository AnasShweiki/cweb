import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './PortfolioTabs.module.css'; // Import the CSS module

// Define types for portfolio item and tabs
interface PortfolioItem {
  src: string;
  href: string;
  name: string;
  category: string;
}

interface PortfolioTabsProps {
  items: {
    [key: string]: PortfolioItem[];
  };
}

const PortfolioTabs: React.FC<PortfolioTabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.div}>
      <div className={styles.tabContentWrapper}>
        <div className={styles.pageTitle}>My works</div>
        <div className="home-project-tabs w-tabs">
          <div className={styles.wTabMenu} role="tablist">
            {Object.keys(items).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`${styles.wTabLink} ${activeTab === tab ? styles.wTabLinkActive : ''}`}
                role="tab"
                aria-controls={`w-tabs-0-data-w-pane-${tab}`}
                aria-selected={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-tab-content">
            {Object.keys(items).map((tab) => (
              <div
                key={tab}
                className={`${styles.wTabPane} ${activeTab === tab ? styles.wTabPaneActive : ''}`}
                id={`w-tabs-0-data-w-pane-${tab}`}
                role="tabpanel"
                aria-labelledby={`w-tabs-0-data-w-tab-${tab}`}
              >
                <div className="w-dyn-list">
                  <div role="list" className={styles.homeportfoliocollectionlist}>
                    {items[tab].map((item, index) => (
                      <div key={index} role="listitem" className="home-portfolio-collection-item w-dyn-item">
                        <div className="home-portfolio-item">
                          <Image
                            src={item.src}
                            alt={item.name}
                            layout="responsive"
                            width={640}
                            height={360}
                            className="home-portfolio-image"
                          />
                          <div className="home-portfolio-item-hover-overlay">
                            <Link href={item.href} legacyBehavior>
                              <a className="home-portfolio-name">()</a>
                            </Link>
                            <div className="home-portfolio-category">{}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTabs;
