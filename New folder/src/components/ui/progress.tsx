import React from 'react';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

export function Progress({ value, max = 100, className }: ProgressProps) {
  return (
    <div className={`relative bg-gray-700 ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-blue-500"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
}
