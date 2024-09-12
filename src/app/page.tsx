"use client"; // top to the file
import Component from '@/components/ui/page'; // Ensure this path is correct
import React from 'react';
import { motion } from "framer-motion"
import styles from '../app/styles.module.css'
function Page() {
  return (
<div className='flex items-center justify-center min-h-screen w-full'>
{/* <div className={styles.headers}>
          <Links />
        </div> */}
      <Component  />
      </div>
  );
}

export default Page;

// pages/projects.js
// import Layout from '../components/Layout';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Projects() {
//   return (
//     <Layout>
//       <div className="home-main-block">
//         <div className="home-tabs">
//           <div className="home-tab-nav">
//             {/* Navigation links (already included in Layout) */}
//           </div>
//           <div className="home-tab-page">
//             <div className="tab-pane">
//               <div className="tab-content-wrapper">
//                 <div className="page-title">my works</div>
//                 <div className="home-project-tabs">
//                   <div className="w-tab-menu">
//                     <Link href="#w-tabs-0-data-w-pane-0" className="tab-link-portfolio w-tab-link w--current">
//                       <div>all</div>
//                     </Link>
//                     <Link href="#w-tabs-0-data-w-pane-1" className="tab-link-portfolio w-tab-link">
//                       <div>developement</div>
//                     </Link>
//                     <Link href="#w-tabs-0-data-w-pane-2" className="tab-link-portfolio w-tab-link">
//                       <div>web</div>
//                     </Link>
//                     <Link href="#w-tabs-0-data-w-pane-3" className="tab-link-portfolio w-tab-link">
//                       <div>mobile app</div>
//                     </Link>
//                   </div>
//                   <div className="w-tab-content">
//                     <div className="w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0">
//                       <div className="w-dyn-list">
//                         <div role="list" className="home-portfolio-collection-list">
//                           {/* Portfolio items */}
//                           <div role="listitem" className="home-portfolio-collection-item">
//                             <div className="home-portfolio-item">
//                               <Image src="/images/portfolio-tbnl-06.jpg" alt="Nature Project" width={640} height={400} />
//                               <div className="home-portfolio-item-hover-overlay">
//                                 <Link href="/projects/nature-project">
//                                   <div className="home-portfolio-name">Nature Project</div>
//                                 </Link>
//                                 <div className="home-portfolio-category">developement</div>
//                               </div>
//                             </div>
//                           </div>
//                           {/* Repeat for other portfolio items */}
//                         </div>
//                       </div>
//                     </div>
//                     {/* Repeat for other tabs */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
