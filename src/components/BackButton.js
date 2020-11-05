import { Link } from 'react-router-dom';

import { BackArrow } from '../assets/icons/BackArrow';

export function BackButton({ to = '/' }) {
  return (
    <Link
      to={to}
      className={`
        inline-flex
        font-medium
        border
        rounded
        p-2
        hover:bg-gray-200`}
    >
      <BackArrow />
      <span>Back</span>
    </Link>
  );
}
