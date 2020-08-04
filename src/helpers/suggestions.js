export function makeId(text) {
  if (text === undefined) return;
  return `sug-${text.split(' ').join('--')}`;
}

// how to prevent issues when tag intentionally has --
export function getTagFromId(id) {
  const parts = id.split('sug-');
  return parts[1].split('--').join(' ');
}
