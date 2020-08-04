import React from 'react';
import { Link } from 'react-router-dom';
import { ListTags } from './ListTags';

export function ListItem({ item, addSearchTag, removeSearchTag }) {
  return (
    <div className='flex p-6 justify-between border-b'>
      <div className='w-5/6'>
        <Link
          className='font-bold hover:text-indigo-600'
          to={{ pathname: `/walkthrough/${item.id}`, content: item }}
        >
          {item.title}{' '}
          <span role='img' aria-label='Link to item'>
            🔗
          </span>
        </Link>
        <div>{item.description}</div>
      </div>
      <div className='w-1/6'>
        {item.tags.length > 0 ? (
          <ListTags tags={item.tags} addSearchTag={addSearchTag} />
        ) : (
          <span className='text-xs font-semibold select-none'>
            no tags found
          </span>
        )}
      </div>
    </div>
  );
}
