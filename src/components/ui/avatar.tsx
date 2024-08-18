import React from 'react';
import Image from "next/image"
import Link from 'next/link'

interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

export function Avatar({ children, className, ...props }: AvatarProps) {
  return (
    
    <div className={`relative flex items-center justify-center ${className}`} {...props}>
      {children}
    </div>
  );
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function AvatarImage({ src, alt, className, ...props }: AvatarImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`rounded-full ${className}`}
      {...props}
    />
  );
}

interface AvatarFallbackProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

export function AvatarFallback({ children, className, ...props }: AvatarFallbackProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gray-500 text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
