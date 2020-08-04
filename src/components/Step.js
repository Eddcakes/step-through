import React, { useState } from 'react';

export function Step({ details }) {
  const [complete, setComplete] = useState(details.complete);
  const handleToggle = () => setComplete(!complete);

  return (
    <div className='border-b'>
      <div className='flex flex-row items-center p-2 pb-4 pt-4'>
        <span>
          <input
            className='align-baseline h-6 w-6 cursor-pointer'
            checked={complete}
            onChange={handleToggle}
            type='checkbox'
          />
        </span>

        <div className='pl-3 cursor-pointer' onClick={handleToggle}>
          {details.text}
        </div>
      </div>
      {details.image && (
        <figure className='flex flex-col'>
          <img src={details.image} alt={`Step ${details.step} guidance`} />
          <figcaption className='text-gray-700 italic self-center text-sm'>
            {details.caption}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
