import React from 'react';

export function Cross() {
  return (
    <svg
      className='h-4 w-4'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
}
