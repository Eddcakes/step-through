import React from 'react';
import { ListItem } from './ListItem';

export function List({ data = [], addSearchTag, removeSearchTag }) {
  if (data.length > 0) {
    return (
      <div>
        {data.map((item) => (
          <ListItem item={item} key={item.id} addSearchTag={addSearchTag} />
        ))}
      </div>
    );
  } else {
    return <div>Could not find guides related to search terms</div>;
  }
}
