import React from 'react';
import { Button } from 'react-bootstrap';

export default function StickersHeader({
  stickers,
  createNewSticker,
  Search,
  setSearch,
}) {
  function getColor() {
    let random = Math.floor(Math.random() * 10 + stickers.length);
    if (random < 2 && random < 5) {
      return '#c894d5db';
    } else if (random >= 5 && random < 8) {
      return '#66c2d6';
    } else if (random >= 8 && random <= 10) {
      return 'pink';
    } else return '#8f24ff';
  }
  function onSubmit(e) {
    e.preventDefault();
    const newSticker = {
      title: '',
      color: getColor(),
      completed: false,
    };
    createNewSticker(newSticker);
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="headersStickers">
      <input
        type="text"
        value={Search}
        onChange={onSearchChange}
        className="searchInput"
        placeholder="Search..."
      ></input>
      <Button
        variant="primary"
        size="sm"
        type="submit"
        onClick={onSubmit}
      >
        Add new Sticker
      </Button>
    </div>
  );
}
