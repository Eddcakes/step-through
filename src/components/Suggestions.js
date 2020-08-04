import React, { useState, useEffect } from 'react';
import { Suggestion } from './Suggestion';
import { getTagFromId, makeId } from '../helpers/suggestions';

export function Suggestions({ tagList, addSelectedSearchTag }) {
  const [current, setCurrent] = useState(null);
  const handleHoverItem = (evt) => {
    const tag = getTagFromId(evt.target.id);
    setCurrent(tagList.indexOf(tag));
  };
  useEffect(() => {
    const keyPressHandler = (evt) => {
      //using arrow buttons still moves cursor to start/end of text
      if (evt.key === 'ArrowDown') {
        if (current === null) {
          setCurrent(0);
        } else {
          setCurrent(current >= tagList.length - 1 ? 0 : current + 1);
        }
      }

      if (evt.key === 'ArrowUp') {
        if (current === null) {
          setCurrent(0);
        } else {
          setCurrent(current === 0 ? tagList.length - 1 : current - 1);
        }
      }

      if (evt.key === 'Enter') {
        if (current === null) {
          return;
        } else {
          addSelectedSearchTag(evt, tagList[current]);
        }
      }
    };
    document.addEventListener('keydown', keyPressHandler);

    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });
  return (
    <ul className='absolute bg-white shadow'>
      {tagList.map((tag, index) => (
        <Suggestion
          key={tag + index}
          tag={tag}
          addSelectedSearchTag={addSelectedSearchTag}
          active={makeId(tagList[current])}
          handleHover={handleHoverItem}
        />
      ))}
    </ul>
  );
}
