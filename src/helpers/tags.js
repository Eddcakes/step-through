// list of colors (tailwindcss keywords)
export const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink',
];

export function getTagColor(tag) {
  if (tag === undefined) {
    return colors[indexLimit(0, colors.length)];
  }
  return colors[indexLimit(tag.length, colors.length)];
}

function indexLimit(value, limit) {
  if (value <= limit) {
    return value;
  } else {
    return indexLimit(value - limit, limit);
  }
}
