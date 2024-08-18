'use client'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '@/components/ui/navhaeders/navheaders.module.css'
export function Links() {
  const pathname = usePathname()

  return (
    <nav>
      <aside className={styles.container }>
        <Avatar>
          <AvatarFallback className="text-xl font-bold text-blue-500">RN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center space-y-6">
          <Link href="/profile" aria-label="Profile">
            <UserIcon className={`w-6 h-6 ${pathname === '/profile' ? 'text-blue-500' : 'text-gray-400'} hover:scale-125 transition-transform duration-300`} />
          </Link>
          <Link href="/messages" aria-label="Messages">
            <MessageCircleIcon className={`w-6 h-6 ${pathname === '/messages' ? 'text-blue-500' : 'text-gray-400'} hover:scale-125 transition-transform duration-300`} />
          </Link>
          <Link href="/documents" aria-label="Documents">
            <FilePenIcon className={`w-6 h-6 ${pathname === '/documents' ? 'text-blue-500' : 'text-gray-400'} hover:scale-125 transition-transform duration-300`} />
          </Link>
          <Link href="/glasses" aria-label="Glasses">
            <GlassesIcon className={`w-6 h-6 ${pathname === '/glasses' ? 'text-blue-500' : 'text-gray-400'} hover:scale-125 transition-transform duration-300`} />
          </Link>
          <Link href="/jobs" aria-label="Jobs">
            <BriefcaseIcon className={`w-6 h-6 ${pathname === '/jobs' ? 'text-blue-500' : 'text-gray-400'} hover:scale-125 transition-transform duration-300`} />
          </Link>
          <Link href="/downloads" aria-label="Downloads">
            <DownloadIcon className={`w-6 h-6 ${pathname === '/downloads' ? 'text-blue-500' : 'text-gray-400'} hover:scale-125 transition-transform duration-300`} />
          </Link>
        </div>
      </aside>
    </nav>
  )
}

// Icon components as defined previously remain unchanged

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}

function GlassesIcon(props) {
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
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </svg>
  )
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}
