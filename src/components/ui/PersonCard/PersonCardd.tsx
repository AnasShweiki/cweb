
import profileImage from '../../images/IMG_2001 copy.jpg'
import Image from 'next/image';
import styles from './PersonCard.module.css'; 

const PersonCard = () => {
  return (
    <div className={styles.mainPersonImageBlock}>
      <Image
        src={profileImage}
        alt="photo"
        layout="fill"
        objectFit="cover"
        className={styles.mainPersonImage}
      />
      <div className={styles.cimage}> 

     
    
      <div className={styles.photoOverlay}></div>
      <div className={styles.personInfo}>
        <h2 className={styles.textWhite}>Ren Nolan</h2>
        <div className={styles.personPosition}>Developer</div>
        <div className={styles.socialsWrapper}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIconMainHome}>
            <FacebookIcon className={styles.socialIcon} />
          </a>
          <a href="https://www.dribbble.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIconMainHome}>
            <DribbbleIcon className={styles.socialIcon} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIconMainHome}>
            <LinkedinIcon className={styles.socialIcon} />
          </a>
          <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className={styles.socialIconMainHome}>
            <TwitterIcon className={styles.socialIcon} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function DribbbleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default PersonCard;
