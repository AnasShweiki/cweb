import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Links } from "@/components/ui/navhaeders/navlinks"
import Image from "next/image"
import { useRouter } from "next/router"
import iamgeback from '../../Images/629759bce5f0f5ed3d86fe81_bg-image.jpg'
import styles from '../../app/styles.module.css'

const Component=() =>{



   
  return (
    <div className={styles.container }>
      
 <div className={styles.content}>
                 <div className={styles.headers}>
                        <Links />
                 </div>
      <main className="flex flex-1">
        <div className="flex flex-col items-center justify-center w-1/3 p-8 bg-gray-800">
          <Image
            src=""
            alt="Profile"
            className="w-48 h-48 rounded-full"
            width="300"
            height="300"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
          <h1 className="mt-4 text-2xl font-bold">Ren Nolan</h1>
          <p className="text-blue-500">Developer</p>
          <div className="flex mt-4 space-x-4">
            <FacebookIcon className="w-6 h-6 text-gray-400" />
            <DribbbleIcon className="w-6 h-6 text-gray-400" />
            <TwitterIcon className="w-6 h-6 text-gray-400" />
            <LinkedinIcon className="w-6 h-6 text-gray-400" />
            <DribbbleIcon className="w-6 h-6 text-gray-400" />
          </div>
        </div>
     <div className="flex-1 p-8">
          <h2 className="text-4xl font-bold">Anas Shweiki</h2>
              <p className="mt-2 text-blue-500">1.5 years in coding / learn From codeZone /Full stackWeb Developer/Full stackAppDeveloper</p>
              <p className="mt-4 text-gray-400">
               Web Developer with 1.5 years of experience in developing user interfaces, testing, debugging,
                and training staff within CodeZone. Proven ability in optimizing web functionality that
                 improve data retrieval and workflow efficiencies.
              </p>
        <div className="mt-8">
            <h3 className="flex items-center text-2xl font-bold">
              <WorkflowIcon className="w-6 h-6 mr-2 text-blue-500" />
              skills
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex justify-between">
                  <span>web development</span>
                  <span>91%</span>
                </div>
                <div className="w-full h-1 bg-gray-700">
                  <div className="h-1 bg-blue-500" style={{ width: "91%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>data base</span>
                  <span>82%</span>
                </div>
                <div className="w-full h-1 bg-gray-700">
                  <div className="h-1 bg-blue-500" style={{ width: "82%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>seo optimisation</span>
                  <span>90%</span>
                </div>
                <div className="w-full h-1 bg-gray-700">
                  <div className="h-1 bg-blue-500" style={{ width: "90%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>ui/ux design</span>
                  <span>91%</span>
                </div>
                <div className="w-full h-1 bg-gray-700">
                  <div className="h-1 bg-blue-500" style={{ width: "91%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>graphic design</span>
                  <span>90%</span>
                </div>
                <div className="w-full h-1 bg-gray-700">
                  <div className="h-1 bg-blue-500" style={{ width: "90%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      
    </div>
  )
}



function DribbbleIcon(props) {
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


function FacebookIcon(props) {
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



function LinkedinIcon(props) {
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


function TwitterIcon(props) {
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



function WorkflowIcon(props) {
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
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  )
}

export default Component;
