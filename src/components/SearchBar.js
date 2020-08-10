import React from 'react';
import { Tag } from './Tag';
import { Suggestions } from './Suggestions';

export function SearchBar({
  tagList = [],
  selectedTags,
  value,
  handleChange,
  removeSearchTag,
  suggestion,
  addSelectedSearchTag,
  handleInputFocus,
  handleInputBlur,
  focusParent,
}) {
  return (
    <>
      <div className={`self-center w-1/2 outline-none`}>
        <div
          className={`flex flex-wrap border rounded ${
            focusParent ? 'shadow-outline' : ''
          }
        ${suggestion ? 'rounded-b-none' : ''}
          `}
        >
          <div className='tags self-center px-1 flex flex-row flex-wrap'>
            {selectedTags.length > 0 &&
              selectedTags.map((tag, index) => (
                <Tag
                  tag={tag}
                  removable={true}
                  key={tag + index}
                  removeSearchTag={removeSearchTag}
                />
              ))}
          </div>
          <div className='search px-1 flex-grow'>
            <input
              className='py-2 w-full outline-none'
              placeholder='Search guides or #tags'
              value={value}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>
        {suggestion && tagList.length > 0 && focusParent && (
          <Suggestions
            tagList={tagList}
            addSelectedSearchTag={addSelectedSearchTag}
          />
        )}
      </div>
    </>
  );
}
