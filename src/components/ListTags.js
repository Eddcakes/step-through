import React from 'react';
import { Tag } from './Tag';

export function ListTags({ tags, addSearchTag, removeSearchTag }) {
  return (
    <div className='px-2 flex flex-row flex-wrap'>
      {tags.map((tag, index) => (
        <Tag
          key={tag + index}
          tag={tag}
          removable={false}
          addSearchTag={addSearchTag}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}
