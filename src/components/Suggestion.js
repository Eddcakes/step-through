import React from 'react';
import { makeId } from '../helpers/suggestions';

export function Suggestion({ tag, active, handleHover, addSelectedSearchTag }) {
  return (
    <li
      onClick={(evt) => addSelectedSearchTag(evt, tag)}
      id={makeId(tag)}
      className={`cursor-pointer px-2 select-none
      ${active === makeId(tag) ? 'bg-blue-100' : ''}`}
      onMouseEnter={handleHover}
      tabIndex={-1}
    >
      {tag}
    </li>
  );
}
