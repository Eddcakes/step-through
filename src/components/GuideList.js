import React, { useState, useEffect } from 'react';
import { List } from './List';
import { SearchBar } from './SearchBar';

export function GuideList({ data }) {
  //pass in data or fetch
  const [content] = useState(data);
  const [searchTxt, setSearchTxt] = useState('');
  const [selTag, setSelTag] = useState([]);
  const [suggestion, setSuggestion] = useState(false);
  const [inputFocus, setInputfocus] = useState(false);

  //all available tags, to help with autocomplete
  const tagList = [
    ...new Set(data.reduce((acc, current) => [...acc, ...current.tags], [])),
  ];

  const searchInput = (evt) => setSearchTxt(evt.target.value);

  const addSearchTag = (evt, newTag) => {
    if (!selTag.includes(newTag)) {
      return setSelTag([...selTag, newTag]);
    }
  };
  const addSelectedSearchTag = (evt, newTag) => {
    setSearchTxt(searchTxt.split('#')[0]);
    if (!selTag.includes(newTag)) {
      setSelTag([...selTag, newTag]);
    }
  };

  const removeSearchTag = (evt, removeTag) =>
    setSelTag(selTag.filter((tag) => tag !== removeTag));
  const search = (items) => {
    //formatted search text
    const cleanSearchTxt = searchTxt.split('#').join('').toLowerCase();
    return items.filter((item) => {
      if (selTag.length < 1) {
        return (
          item.title.toLowerCase().indexOf(cleanSearchTxt) > -1 ||
          item.description.toLowerCase().indexOf(cleanSearchTxt) > -1
        );
      } else {
        return (
          item.tags.some((tag) => selTag.includes(tag)) &&
          (item.title.toLowerCase().indexOf(cleanSearchTxt) > -1 ||
            item.description.toLowerCase().indexOf(cleanSearchTxt) > -1)
        );
      }
    });
  };

  const searchTags = (items) => {
    const inputTag = searchTxt.toLowerCase().split('#');
    return items.filter((item) => item.toLowerCase().includes(inputTag[1]));
  };

  const handleInputFocus = (evt) => {
    if (!inputFocus) {
      return setInputfocus(true);
    }
  };
  const handleInputBlur = (evt) => {
    //fixes onClick not triggering as onBlur has higher prio
    if (!evt.relatedTarget) {
      setInputfocus(false);
    }
  };

  useEffect(() => {
    if (searchTxt.includes('#')) {
      setSuggestion(true);
    } else {
      setSuggestion(false);
    }
  }, [searchTxt]);

  useEffect(() => {
    const keyPressHandler = (evt) => {
      if (inputFocus) {
        if (evt.key === 'Backspace') {
          if (selTag.length > 0 && searchTxt.length === 0) {
            setSelTag(selTag.slice(0, selTag.length - 1));
          }
        }
      }
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => document.removeEventListener('keydown', keyPressHandler);
  }, [selTag, searchTxt, inputFocus]);
  return (
    <div className='flex flex-col'>
      <SearchBar
        tagList={searchTags(tagList)}
        selectedTags={selTag}
        value={searchTxt}
        handleChange={searchInput}
        removeSearchTag={removeSearchTag}
        suggestion={suggestion}
        addSelectedSearchTag={addSelectedSearchTag}
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        focusParent={inputFocus}
      />
      <List data={search(content)} addSearchTag={addSearchTag} />
    </div>
  );
}
