import React from 'react';
import { getTagColor } from '../helpers/tags';
import { Cross } from '../assets/icons/Cross';

export function Tag({
  tag,
  removable,
  addSearchTag = () => {},
  removeSearchTag = () => {},
}) {
  const tagColor = getTagColor(tag);
  const handleOnClick = (evt) => {
    if (removable) {
      return removeSearchTag(evt, tag);
    } else {
      return addSearchTag(evt, tag);
    }
  };

  return (
    <span
      className={`
        flex
        text-xs
        border-2 
        border-${tagColor}-600 
        bg-${tagColor}-200
        hover:bg-${tagColor}-300
        rounded-full
        py-1
        px-2
        mr-1
        mt-1
        text-center
        cursor-pointer
        select-none
        `}
      style={{ width: 'fit-content' }}
      onClick={handleOnClick}
    >
      {tag}
      {removable && <Cross />}
    </span>
  );
}
