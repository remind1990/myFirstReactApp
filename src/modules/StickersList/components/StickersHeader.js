import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function StickersHeader({
  stickers,
  createNewSticker,
  Search,
  setSearch,
}) {
  const navigate = useNavigate();
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
      <InputGroup className="mb-3">
        <Button
          id="button-addon2"
          variant="primary"
          size="sm"
          type="submit"
          onClick={onSubmit}
        >
          Add new Sticker
        </Button>
        <FormControl
          placeholder="Search...."
          aria-label="Username"
          aria-describedby="basic-addon2"
          value={Search}
          onChange={onSearchChange}
          className="searchInput"
        />
        <Button
          id="button-addon2"
          variant="primary"
          size="sm"
          onClick={() => setTimeout(() => navigate(-1), 500)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-box-arrow-in-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
        </Button>
      </InputGroup>
      {/* <input
        type="text"
        value={Search}
        onChange={onSearchChange}
        className="searchInput"
        placeholder="Search..."
      ></input> */}
    </div>
  );
}
